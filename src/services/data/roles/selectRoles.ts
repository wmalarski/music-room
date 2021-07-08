import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";

export type SelectRolesArgs = {
  userId: string;
  roomSlug: string;
};

export type SelectRolesKey = ["roles", SelectRolesArgs];

export type SelectRolesReturn = {
  id: number;
  user_id: string;
  room_id: number;
  slug: string;
  role: string;
};

export const selectRoles = async ({
  queryKey: [, { userId, roomSlug }],
}: QueryFunctionContext<SelectRolesKey>): Promise<SelectRolesReturn[]> => {
  const { data, error } = await supabase
    .from<SelectRolesReturn>("roles")
    .select("id, profile_id ( user_id ), room_id, room_id ( slug ), role")
    .eq("user_id", userId)
    .eq("slug", roomSlug);

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
