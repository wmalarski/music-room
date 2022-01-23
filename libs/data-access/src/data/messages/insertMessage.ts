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
import { selectMessagesKey, SelectMessagesReturn } from './selectMessages';

export type InsertMessageArgs = Omit<Message, 'id' | 'created_at' | 'ended_at'>;

export type InsertMessageContext = {
  previous?: SelectMessagesReturn;
};

export const insertMessage = async (
  args: InsertMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase('messages').insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertMessage = ({
  roomId,
  limit,
  offset,
  ...options
}: UseMutationOptions<
  Message,
  PostgrestError,
  InsertMessageArgs,
  InsertMessageContext
> & {
  roomId: number;
  limit: number;
  offset: number;
}): UseMutationResult<
  Message,
  PostgrestError,
  InsertMessageArgs,
  InsertMessageContext
> => {
  const client = useQueryClient();
  const key = selectMessagesKey({ roomId, limit, offset });
  const keyCurrent = selectCurrentMessageKey({ roomId });

  return useMutation(insertMessage, {
    ...options,
    onMutate: async (action) => {
      await client.cancelQueries(key);

      const previous = client.getQueryData<SelectMessagesReturn>(key);

      if (!previous || previous.count <= offset + limit) return {};

      const message: Message = {
        id: Math.max(...previous.messages.map((message) => message.id)) + 1,
        created_at: new Date().toISOString(),
        ...action,
      };

      client.setQueryData<SelectMessagesReturn>(key, {
        count: previous.count + 1,
        offset,
        messages: [...previous.messages, message],
      });

      return { previous };
    },
    onError: (err, action, context) => {
      client.setQueryData(key, context?.previous);
      options?.onError?.(err, action, context);
    },
    onSettled: (message, ...args) => {
      client.invalidateQueries(key);
      client.invalidateQueries(keyCurrent);
      options?.onSettled?.(message, ...args);
    },
  });
};
