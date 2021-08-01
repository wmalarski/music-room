import { User } from "@supabase/supabase-js";
import {
  Action,
  Controls,
  Member,
  Message,
  Profile,
  Room,
} from "../data/types";

export const defaultUser: User = {
  app_metadata: {},
  aud: "",
  created_at: new Date().toISOString(),
  id: "qwertyuiop",
  user_metadata: {},
};

export const defaultAction: Action = {
  created_at: new Date().toISOString(),
  dislike_at: null,
  id: 1,
  like_at: null,
  message_id: 1,
  profile_id: 1,
  updated_at: new Date().toISOString(),
};

export const defaultProfile: Profile = {
  avatar: null,
  id: 1,
  name: "Name",
  user_id: "user_id",
};

export const defaultMember: Member = {
  role_id: 1,
  author_id: 1,
  data: { kind: "room#0.0.1" },
  hash: "qwertyuiop",
  profile_id: 1,
  room_id: 1,
  room_name: "FirstRoom",
  user_id: "",
  name: "First",
  slug: "first",
  role: "user",
  avatar: null,
};

export const defaultRoom: Room = {
  author_id: 1,
  data: { kind: "room#0.0.1" },
  hash: "qwertyuiop",
  id: 1,
  name: "Room",
  slug: "room",
};

export const defaultMessage: Message = {
  created_at: new Date().toLocaleTimeString(),
  data: { kind: "message#0.0.1", url: "dQw4w9WgXcQ" },
  id: 1,
  profile_id: 1,
  room_id: 1,
};

export const defaultControls: Controls = {
  id: 1,
  muted: false,
  pause: false,
  room_id: 1,
  speaker_id: 1,
  volume: 0,
};
