import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Profile, Role, Room } from "../types";

export type SelectRolesArgs = {
  userId: string;
  roomSlug: string;
};

export type SelectRolesKey = ["roles", SelectRolesArgs];

export type SelectRolesReturn = {
  profile_id: Pick<Profile, "user_id" | "id">;
  room_id: Pick<Room, "slug" | "id" | "name">;
  role: Role["role"];
};

export const selectRoles = async ({
  queryKey: [, { userId, roomSlug }],
}: QueryFunctionContext<SelectRolesKey>): Promise<SelectRolesReturn[]> => {
  const { data, error } = await supabase
    .from<SelectRolesReturn>("roles")
    .select("profile_id ( id, user_id ), room_id ( id, slug, name ), role")
    .match({
      "profile_id.user_id": userId,
      "room_id.slug": roomSlug,
    });

  if (error || !data) throw error;

  return data;
};

export const selectRolesKey = (args: SelectRolesArgs): SelectRolesKey => [
  "roles",
  args,
];

export const useSelectRoles = (
  args: SelectRolesArgs,
  options?: UseQueryOptions<
    SelectRolesReturn[],
    PostgrestError,
    SelectRolesReturn[],
    SelectRolesKey
  >
): UseQueryResult<SelectRolesReturn[], PostgrestError> =>
  useQuery(selectRolesKey(args), selectRoles, options);
