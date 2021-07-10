DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS actions;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS controls;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS profiles;

---- Table Setup ----
CREATE TABLE profiles (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  user_id uuid NOT NULL UNIQUE
);

CREATE TABLE rooms (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  author_id BIGINT NOT NULL REFERENCES profiles,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  data JSON NOT NULL
);

CREATE TABLE controls (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  room_id BIGINT NOT NULL UNIQUE REFERENCES rooms,
  muted BOOLEAN DEFAULT false NOT NULL,
  volume numeric DEFAULT 1 NOT NULL,
  pause BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE messages (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  room_id BIGINT NOT NULL REFERENCES rooms,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  data JSON NOT NULL
);

CREATE TABLE actions (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  messages_id BIGINT NOT NULL REFERENCES messages,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  like_at TIMESTAMP NOT NULL,
  dislike_at TIMESTAMP NOT NULL
);

CREATE TABLE roles (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  room_id BIGINT NOT NULL REFERENCES rooms,
  role TEXT NOT NULL
);

---- User profiles sync ----
CREATE OR REPLACE FUNCTION signup_copy_to_profiles_table()
RETURNS TRIGGER AS $$
  BEGIN
    INSERT INTO public.profiles (user_id, name)
    VALUES(new.id, new.email);
  
    RETURN NEW;
  END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS signup_copy on auth.users;
CREATE TRIGGER signup_copy
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE PROCEDURE signup_copy_to_profiles_table();

---- Room create sync ----
CREATE OR REPLACE FUNCTION insert_role_and_controls_for_room()
RETURNS TRIGGER AS $$
  BEGIN
    INSERT INTO public.roles (room_id, profile_id, role)
    VALUES(new.id, new.author_id, 'owner');

    INSERT INTO public.controls (room_id)
    VALUES(new.id);
  
    RETURN NEW;
  END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS profile_room_author on public.rooms;
CREATE TRIGGER profile_room_author
AFTER INSERT ON public.rooms
FOR EACH ROW EXECUTE PROCEDURE insert_role_and_controls_for_room();
