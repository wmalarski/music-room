import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Message, MessageData } from "../types";

export type InsertMessageArgs = {
  profile_id: number;
  room_id: number;
  data: MessageData;
};

export const insertMessage = async (
  args: InsertMessageArgs
): Promise<Message> => {
  const { data, error } = await supabase
    .from<Message>("messages")
    .insert(args)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useInsertMessage = (
  options?: UseMutationOptions<Message, PostgrestError, InsertMessageArgs>
): UseMutationResult<Message, PostgrestError, InsertMessageArgs> =>
  useMutation(insertMessage, options);
