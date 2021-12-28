export type Action = {
  id: number;
  profile_id: number;
  message_id: number;
  created_at: string;
  updated_at: string;
  like_at: string | null;
  dislike_at: string | null;
};

export type Controls = {
  id: number;
  room_id: number;
  muted: boolean;
  volume: number;
  pause: boolean;
  speaker_id: number;
};

export type MessageData = {
  kind: "message#0.0.1";
  url: string;
};

export type Message = {
  id: number;
  profile_id: number;
  room_id: number;
  created_at: string;
  ended_at?: string;
  data: MessageData;
};

export type Profile = {
  id: number;
  name: string;
  user_id: string;
  avatar: string | null;
};

export type RoomRole = "owner" | "mod" | "user" | "guest";

export type Role = {
  id: number;
  profile_id: number;
  room_id: number;
  role: RoomRole;
};

export type RoomData = {
  kind: "room#0.0.1";
};

export type Room = {
  id: number;
  author_id: number;
  name: string;
  slug: string;
  data: RoomData;
  hash: string;
};

export type Member = {
  id: number;
  role: RoomRole;
  user_id: string;
  profile_id: number;
  profile_name: string;
  profile_avatar: string | null;
  room_id: number;
  room_name: string;
  room_slug: string;
  room_hash: string;
  room_author_id: number;
  room_avatar: string | null;
};

export type TableMapping = {
  actions: Action;
  controls: Controls;
  members: Member;
  messages: Message;
  profiles: Profile;
  roles: Role;
  rooms: Room;
};

export type ResponseError = {
  error: string;
  error_description: string;
};
