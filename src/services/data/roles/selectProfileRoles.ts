import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Profile, Room } from "../types";

export type SelectProfileRolesArgs = {
  userId: string;
};

export type SelectProfileRolesKey = ["profileRoles", SelectProfileRolesArgs];

export type SelectProfileRolesReturn = {
  profile_id: Pick<Profile, "user_id">;
  room_id: Room;
};

export const selectProfileRoles = async ({
  queryKey: [, { userId }],
}: QueryFunctionContext<SelectProfileRolesKey>): Promise<
  SelectProfileRolesReturn[]
> => {
  const { data, error } = await supabase
    .from<SelectProfileRolesReturn>("roles")
    .select("profile_id ( user_id ), room_id ( * )")
    .match({ "profile_id.user_id": userId });

  if (error || !data) throw error;

  return data;
};

export const selectProfileRolesKey = (
  args: SelectProfileRolesArgs
): SelectProfileRolesKey => ["profileRoles", args];

export const useSelectProfileRoles = (
  args: SelectProfileRolesArgs,
  options?: UseQueryOptions<
    SelectProfileRolesReturn[],
    PostgrestError,
    SelectProfileRolesReturn[],
    SelectProfileRolesKey
  >
): UseQueryResult<SelectProfileRolesReturn[], PostgrestError> =>
  useQuery(selectProfileRolesKey(args), selectProfileRoles, options);
