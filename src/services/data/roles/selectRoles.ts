import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Role } from "../types";

export type SelectRolesArgs = {
  roomId: number;
};

export type SelectRolesKey = ["roles", SelectRolesArgs];

export const selectRoles = async ({
  queryKey: [, { roomId }],
}: QueryFunctionContext<SelectRolesKey>): Promise<Role[]> => {
  const { data, error } = await supabase
    .from<Role>("roles")
    .select("*")
    .eq("room_id", roomId);

  if (error || !data) throw error;

  return data;
};

export const selectRolesKey = (args: SelectRolesArgs): SelectRolesKey => [
  "roles",
  args,
];

export const useSelectRoles = (
  args: SelectRolesArgs,
  options?: UseQueryOptions<Role[], PostgrestError, Role[], SelectRolesKey>
): UseQueryResult<Role[], PostgrestError> =>
  useQuery(selectRolesKey(args), selectRoles, options);
