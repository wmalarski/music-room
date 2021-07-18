import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { selectAllMembersKey } from "../members/selectMembers";
import { Role } from "../types";

export type DeleteRoleArgs = Pick<Role, "id">;

export const deleteRole = async ({ id }: DeleteRoleArgs): Promise<Role> => {
  const { data, error } = await supabase
    .from<Role>("roles")
    .delete()
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useDeleteRole = (
  options?: UseMutationOptions<Role, PostgrestError, DeleteRoleArgs>
): UseMutationResult<Role, PostgrestError, DeleteRoleArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteRole, {
    ...options,
    onSuccess: (role, ...args) => {
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
