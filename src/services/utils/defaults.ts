import { User } from "@supabase/supabase-js";
import { Member, Profile } from "../data/types";

export const defaultUser: User = {
  app_metadata: {},
  aud: "",
  created_at: new Date().toISOString(),
  id: "qwertyuiop",
  user_metadata: {},
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
  hash: "d",
  profile_id: 1,
  room_id: 1,
  room_name: "FirstRoom",
  user_id: "",
  name: "First",
  slug: "first",
  role: "user",
  avatar: null,
};
