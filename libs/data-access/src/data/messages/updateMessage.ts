import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { Message } from '../types';
import { selectCurrentMessageKey } from './selectCurrentMessage';

export type UpdateMessageArgs = {
  id: number;
  ended_at?: string;
};

export const updateMessage = async (
  args: UpdateMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase('messages')
    .update(args)
    .eq('id', args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateMessage = (
  roomId: number,
  options?: UseMutationOptions<Message, PostgrestError, UpdateMessageArgs>
): UseMutationResult<Message, PostgrestError, UpdateMessageArgs> => {
  const client = useQueryClient();
  const keyCurrent = selectCurrentMessageKey({ roomId });

  return useMutation(updateMessage, {
    ...options,
    onMutate: async () => {
      await client.cancelQueries(keyCurrent);

      client.setQueryData<Message | null>(keyCurrent, null);
    },
    onError: (err, action, context) => {
      client.setQueryData(keyCurrent, null);
      options?.onError?.(err, action, context);
    },
    onSettled: (message, ...args) => {
      client.invalidateQueries(keyCurrent);
      options?.onSettled?.(message, ...args);
    },
  });
};
