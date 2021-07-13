import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { selectRoomProfilesAllKey } from "../roomProfiles/selectRoomProfiles";
import { Role } from "../types";
import { selectRolesKey } from "./selectRoles";

export type InsertRolesArgs = Omit<Role, "id">;

export const insertRole = async (args: InsertRolesArgs): Promise<Role> => {
  const { data, error } = await supabase
    .from<Role>("roles")
    .insert(args)
    .single();

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
      queryClient.invalidateQueries(selectRoomProfilesAllKey());
      queryClient.invalidateQueries(
        selectRolesKey({
          profile_id: role.profile_id,
          role: role.role,
          room_id: role.room_id,
        })
      );
      options?.onSuccess?.(role, ...args);
    },
  });
};
