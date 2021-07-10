import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { Message } from "../types";
import { selectCurrentMessageKey } from "./selectCurrentMessage";

export type UpdateMessageArgs = {
  id: number;
  ended_at?: string;
};

export const updateMessage = async (
  args: UpdateMessageArgs
): Promise<Message> => {
  const { data, error } = await supabase
    .from<Message>("messages")
    .update(args)
    .eq("id", args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateMessage = (
  options?: UseMutationOptions<Message, PostgrestError, UpdateMessageArgs>
): UseMutationResult<Message, PostgrestError, UpdateMessageArgs> => {
  const queryClient = useQueryClient();

  return useMutation(updateMessage, {
    ...options,
    onSuccess: (message, ...args) => {
      options?.onSuccess?.(message, ...args);
      queryClient.invalidateQueries(
        selectCurrentMessageKey({ roomId: message.room_id })
      );
    },
  });
};
