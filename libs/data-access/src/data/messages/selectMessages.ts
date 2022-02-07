import { PostgrestError } from '@supabase/supabase-js';
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { Message } from '../types';

export type SelectMessagesArgs = {
  roomId: number;
  offset: number;
  limit: number;
};

export type SelectMessagesKey = ['messages', SelectMessagesArgs];

export type SelectMessagesReturn = {
  messages: Message[];
  count: number;
  offset: number;
};

export const selectMessagesKey = (
  args: SelectMessagesArgs
): SelectMessagesKey => ['messages', args];

export const selectMessages = async ({
  queryKey: [, { roomId, offset, limit }],
}: QueryFunctionContext<SelectMessagesKey>): Promise<SelectMessagesReturn> => {
  const { data, error, count } = await fromSupabase('messages')
    .select('*', { count: 'estimated' })
    .eq('room_id', roomId)
    .order('created_at', { ascending: true })
    .range(offset, offset + limit);

  if (error || !data) throw error;

  return { messages: data, count: count ?? 0, offset };
};

export const useSelectMessages = (
  args: SelectMessagesArgs,
  options?: UseQueryOptions<
    SelectMessagesReturn,
    PostgrestError,
    SelectMessagesReturn,
    SelectMessagesKey
  >
): UseQueryResult<SelectMessagesReturn, PostgrestError> => {
  return useQuery(selectMessagesKey(args), selectMessages, options);
};
