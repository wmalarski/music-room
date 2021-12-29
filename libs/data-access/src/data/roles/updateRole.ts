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

export type UpdateRolesArgs = Pick<Role, "id" | "role">;

export const updateRole = async ({
  id,
  role,
}: UpdateRolesArgs): Promise<Role> => {
  const { data, error } = await fromSupabase("roles")
    .update({ id, role })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateRole = (
  options?: UseMutationOptions<Role, PostgrestError, UpdateRolesArgs>
): UseMutationResult<Role, PostgrestError, UpdateRolesArgs> => {
  const queryClient = useQueryClient();

  return useMutation(updateRole, {
    ...options,
    onSuccess: (role, ...args) => {
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
