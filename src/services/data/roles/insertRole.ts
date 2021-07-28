import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { selectAllMembersKey } from "../members/selectMembers";
import { Role } from "../types";

export type InsertRolesArgs = Omit<Role, "id">;

export const insertRole = async (args: InsertRolesArgs): Promise<Role> => {
  // TODO move to procedure
  const { data, error } = await fromSupabase("roles").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertRole = (
  options?: UseMutationOptions<Role, PostgrestError, InsertRolesArgs>
): UseMutationResult<Role, PostgrestError, InsertRolesArgs> => {
  const queryClient = useQueryClient();

  return useMutation(insertRole, {
    ...options,
    onSuccess: (role, ...args) => {
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
