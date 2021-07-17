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
  data JSON NOT NULL,
  hash TEXT NOT NULL DEFAULT MD5(random()::text)
);

CREATE TABLE controls (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  room_id BIGINT NOT NULL UNIQUE REFERENCES rooms,
  speaker_id BIGINT NOT NULL UNIQUE REFERENCES profiles,
  muted BOOLEAN DEFAULT false NOT NULL,
  volume numeric DEFAULT 1 NOT NULL,
  pause BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE messages (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  room_id BIGINT NOT NULL REFERENCES rooms,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  ended_at TIMESTAMP DEFAULT NULL,
  data JSON NOT NULL
);

CREATE TABLE actions (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  message_id BIGINT NOT NULL REFERENCES messages,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  like_at TIMESTAMP DEFAULT NULL,
  dislike_at TIMESTAMP DEFAULT NULL,
);

CREATE TABLE roles (
  id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  profile_id BIGINT NOT NULL REFERENCES profiles,
  room_id BIGINT NOT NULL REFERENCES rooms,
  role TEXT NOT NULL,
  UNIQUE (profile_id, room_id)
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

    INSERT INTO public.controls (room_id, speaker_id)
    VALUES(new.id, new.author_id);
  
    RETURN NEW;
  END;
$$
LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS profile_room_author on public.rooms;
CREATE TRIGGER profile_room_author
AFTER INSERT ON public.rooms
FOR EACH ROW EXECUTE PROCEDURE insert_role_and_controls_for_room();

---- Updated_at ----
create extension if not exists moddatetime schema extensions;

create trigger handle_updated_at before update on actions 
  for each row execute procedure moddatetime (updated_at);

---- roomRoles view ----
create or replace view room_roles as
  select 
    roles.id as role_id,
    profiles.id as profile_id, 
    profiles.name, 
    profiles.user_id as user_id, 
    rooms.id as room_id, 
    rooms.name as room_name, 
    rooms.slug,
    rooms.hash,
    rooms.author_id,
    rooms.data,
    roles.role
  from 
    profiles 
    inner join roles on profiles.id = roles.profile_id 
    inner join rooms on roles.room_id = rooms.id;