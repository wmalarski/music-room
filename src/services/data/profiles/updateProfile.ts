import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { selectAllMembersKey } from "../members/selectMembers";
import { Profile } from "../types";
import { selectProfileKey } from "./selectProfile";

export type UpdateProfileArgs = Pick<Profile, "id" | "name">;

export const updateProfile = async ({
  id,
  name,
}: UpdateProfileArgs): Promise<Profile> => {
  const { data, error } = await supabase
    .from<Profile>("profiles")
    .update({ id, name })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateProfile = (
  options?: UseMutationOptions<Profile, PostgrestError, UpdateProfileArgs>
): UseMutationResult<Profile, PostgrestError, UpdateProfileArgs> => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    ...options,
    onSuccess: (role, ...args) => {
      queryClient.invalidateQueries(selectProfileKey({ userId: role.user_id }));
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
