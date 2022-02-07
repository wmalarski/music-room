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
import {
  SelectMessagesKey,
  selectMessagesKey,
  SelectMessagesReturn,
} from './selectMessages';

export type InsertMessageArgs = Omit<Message, 'id' | 'created_at' | 'ended_at'>;

export type InsertMessageContext = {
  previous: {
    key: SelectMessagesKey;
    offset: number;
    data?: SelectMessagesReturn;
  }[];
};

type InsertMessageOptions = UseMutationOptions<
  Message,
  PostgrestError,
  InsertMessageArgs,
  InsertMessageContext
> & {
  roomId: number;
  limit: number;
  offsets: number[];
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
  offsets,
  ...options
}: InsertMessageOptions): UseMutationResult<
  Message,
  PostgrestError,
  InsertMessageArgs,
  InsertMessageContext
> => {
  const client = useQueryClient();
  const keyCurrent = selectCurrentMessageKey({ roomId });
  const keys = offsets.map((offset) => ({
    key: selectMessagesKey({ roomId, limit, offset }),
    offset,
  }));

  return useMutation(insertMessage, {
    ...options,
    onMutate: async (message) => {
      await Promise.all(keys.map(({ key }) => client.cancelQueries(key)));

      const previous = keys.map(({ key, offset }) => ({
        data: client.getQueryData<SelectMessagesReturn>(key),
        offset,
        key,
      }));

      previous.forEach(({ key, data, offset }) => {
        const messages = data?.messages ?? [];
        const id = Math.max(...messages.map((current) => current.id)) + 1;
        const next = { id, created_at: new Date().toISOString(), ...message };
        client.setQueryData<SelectMessagesReturn>(key, {
          messages: [...messages, next],
          count: (data?.count ?? 0) + 1,
          offset,
        });
      });

      return { previous };
    },
    onError: (err, message, context) => {
      context?.previous.forEach(({ key, data }) => {
        client.setQueryData(key, data);
      });
      options?.onError?.(err, message, context);
    },
    onSettled: (message, ...args) => {
      keys.forEach(({ key }) => {
        client.invalidateQueries(key);
      });
      client.invalidateQueries(keyCurrent);
      options?.onSettled?.(message, ...args);
    },
  });
};
