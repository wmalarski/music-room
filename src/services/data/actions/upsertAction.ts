import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { Action } from "../types";
import { selectActionKey } from "./selectAction";

export type UpsertActionArgs = {
  id?: number;
  profile_id: number;
  message_id: number;
  like_at?: string | null;
  dislike_at?: string | null;
};

export const upsertAction = async (args: UpsertActionArgs): Promise<Action> => {
  const { data, error } = await supabase
    .from<Action>("actions")
    .upsert(args)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpsertAction = (
  options?: UseMutationOptions<Action, PostgrestError, UpsertActionArgs>
): UseMutationResult<Action, PostgrestError, UpsertActionArgs> => {
  const queryClient = useQueryClient();
  return useMutation(upsertAction, {
    ...options,
    onSuccess: (action, ...args) => {
      queryClient.invalidateQueries(
        selectActionKey({
          messageId: action.message_id,
          profileId: action.profile_id,
        })
      );
      options?.onSuccess?.(action, ...args);
    },
  });
};
