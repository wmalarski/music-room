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
};

export type RoomRole = "owner" | "user" | "guest";

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

export type RoomProfile = {
  profile_id: number;
  name: string;
  user_id: string;
  room_id: number;
  room_name: string;
  slug: string;
  hash: string;
  author_id: number;
  data: RoomData;
  role: RoomRole;
};
