import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Message } from "../types";

export const MESSAGES_PAGE_LIMIT = 20;

export type SelectMessagesArgs = {
  roomId: number;
};

export type SelectMessagesKey = ["messages", SelectMessagesArgs];

export const selectMessagesKey = (
  args: SelectMessagesArgs
): SelectMessagesKey => ["messages", args];

export type SelectMessagesReturn = Omit<Message, "room_id">;

export const selectMessages = async ({
  queryKey: [, { roomId }],
  pageParam = 0,
}: QueryFunctionContext<SelectMessagesKey>): Promise<
  SelectMessagesReturn[]
> => {
  const { data, error } = await supabase
    .from<SelectMessagesReturn>("messages")
    .select("id, created_at, data, profile_id")
    .match({ room_id: roomId })
    .order("created_at", { ascending: false })
    .range(pageParam, pageParam + MESSAGES_PAGE_LIMIT);

  if (error || !data) throw error;

  return data;
};

export const useSelectMessages = (
  args: SelectMessagesArgs,
  options?: UseInfiniteQueryOptions<
    SelectMessagesReturn[],
    PostgrestError,
    SelectMessagesReturn[],
    SelectMessagesReturn[],
    SelectMessagesKey
  >
): UseInfiniteQueryResult<SelectMessagesReturn[], PostgrestError> =>
  useInfiniteQuery(selectMessagesKey(args), selectMessages, {
    ...options,
    getNextPageParam: (_, pages) =>
      pages.reduce((prev, values) => prev + values.length, 0),
  });
