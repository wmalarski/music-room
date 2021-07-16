import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { selectAllRoomProfilesKey } from "../roomProfiles/selectRoomProfiles";
import { Role } from "../types";

export type UpdateRolesArgs = Pick<Role, "id" | "role">;

export const updateRole = async ({
  id,
  role,
}: UpdateRolesArgs): Promise<Role> => {
  const { data, error } = await supabase
    .from<Role>("roles")
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
      queryClient.invalidateQueries(selectAllRoomProfilesKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
