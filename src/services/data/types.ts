export type Actions = {
  id: number;
  profile_id: number;
  message_id: number;
  created_at: string;
  like_at: string;
  dislike_at: string;
};

export type Controls = {
  id: number;
  room_id: number;
  muted: boolean;
  volume: number;
  pause: boolean;
};

export type MessageData = {
  kind: string;
};

export type Message = {
  id: number;
  profile_id: number;
  room_id: number;
  created_at: string;
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
  kind: string;
};

export type Room = {
  id: number;
  author_id: number;
  name: string;
  slug: string;
  data: RoomData;
};
