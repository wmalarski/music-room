import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Message } from "../types";

export const MESSAGES_PAGE_LIMIT = 20;

export type SelectMessagesArgs = {
  roomId: number;
};

export type SelectMessagesKey = ["messages", SelectMessagesArgs];

export const selectMessagesKey = (
  args: SelectMessagesArgs
): SelectMessagesKey => ["messages", args];

export const selectMessages = async ({
  queryKey: [, { roomId }],
  pageParam = 0,
}: QueryFunctionContext<SelectMessagesKey>): Promise<Message[]> => {
  const { data, error } = await fromSupabase("messages")
    .select("*")
    .match({ room_id: roomId })
    .order("created_at", { ascending: false })
    .range(pageParam, pageParam + MESSAGES_PAGE_LIMIT);

  if (error || !data) throw error;

  return data;
};

export const useSelectMessages = (
  args: SelectMessagesArgs,
  options?: UseInfiniteQueryOptions<
    Message[],
    PostgrestError,
    Message[],
    Message[],
    SelectMessagesKey
  >
): UseInfiniteQueryResult<Message[], PostgrestError> =>
  useInfiniteQuery(selectMessagesKey(args), selectMessages, {
    ...options,
    getNextPageParam: (_, pages) =>
      pages.reduce((prev, values) => prev + values.length, 0),
  });
