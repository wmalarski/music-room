import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Role } from "../types";

export type SelectRolesArgs = Partial<Role>;

export type SelectRolesKey = ["roles", SelectRolesArgs];

export const selectRolesKey = (args: SelectRolesArgs): SelectRolesKey => [
  "roles",
  args,
];

export const selectRoles = async ({
  queryKey: [, args],
}: QueryFunctionContext<SelectRolesKey>): Promise<Role[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof Role, value),
    supabase.from<Role>("roles").select("*")
  );

  if (error || !data) throw error;

  return data;
};

export const useSelectRoles = (
  args: SelectRolesArgs,
  options?: UseQueryOptions<Role[], PostgrestError, Role[], SelectRolesKey>
): UseQueryResult<Role[], PostgrestError> =>
  useQuery(selectRolesKey(args), selectRoles, options);
