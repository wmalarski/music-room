import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Message } from "../types";

export type SelectCurrentMessageArgs = {
  roomId: number;
};

export type SelectCurrentMessageKey = [
  "currentMessage",
  SelectCurrentMessageArgs
];

export const selectCurrentMessageKey = (
  args: SelectCurrentMessageArgs
): SelectCurrentMessageKey => ["currentMessage", args];

export const selectCurrentMessage = async ({
  queryKey: [, { roomId }],
}: QueryFunctionContext<SelectCurrentMessageKey>): Promise<Message | null> => {
  const { data, error } = await fromSupabase("messages")
    .select("*")
    .is("ended_at", null)
    .eq("room_id", roomId)
    .order("created_at", { ascending: true })
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectCurrentMessage = (
  args: SelectCurrentMessageArgs,
  options?: UseQueryOptions<
    Message | null,
    PostgrestError,
    Message | null,
    SelectCurrentMessageKey
  >
): UseQueryResult<Message | null, PostgrestError> =>
  useQuery(selectCurrentMessageKey(args), selectCurrentMessage, options);
