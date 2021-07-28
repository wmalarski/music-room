import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Message } from "../types";
import { selectCurrentMessageKey } from "./selectCurrentMessage";

export type UpdateMessageArgs = {
  id: number;
  ended_at?: string;
};

export type UpdateMessageContext = {
  previous?: Message;
  next?: Partial<Message>;
};

export const updateMessage = async (
  args: UpdateMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase("messages")
    .update(args)
    .eq("id", args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateMessage = (
  roomId: number,
  options?: UseMutationOptions<
    Message,
    PostgrestError,
    UpdateMessageArgs,
    UpdateMessageContext
  >
): UseMutationResult<
  Message,
  PostgrestError,
  UpdateMessageArgs,
  UpdateMessageContext
> => {
  const queryClient = useQueryClient();
  const selectKey = selectCurrentMessageKey({ roomId });

  return useMutation(updateMessage, {
    ...options,
    onMutate: async (action) => {
      await queryClient.cancelQueries(selectKey);

      const previous = queryClient.getQueryData<Message>(selectKey);
      const next = { ...previous, ...action };

      queryClient.setQueryData(selectKey, next);

      return { previous, next };
    },
    onError: (err, action, context) => {
      queryClient.setQueryData(selectKey, context?.previous);
      options?.onError?.(err, action, context);
    },
    onSettled: (message, ...args) => {
      queryClient.invalidateQueries(selectKey);
      options?.onSettled?.(message, ...args);
    },
  });
};
