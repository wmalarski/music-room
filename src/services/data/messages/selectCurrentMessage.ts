import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
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
  const { data, error } = await supabase
    .from<Message>("messages")
    .select("*")
    .is("ended_at", null)
    .eq("room_id", roomId)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (error) throw error;

  return data;
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
