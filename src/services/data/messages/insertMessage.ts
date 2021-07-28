import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Message } from "../types";

export type InsertMessageArgs = Omit<Message, "id" | "created_at" | "ended_at">;

export const insertMessage = async (
  args: InsertMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase("messages").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertMessage = (
  options?: UseMutationOptions<Message, PostgrestError, InsertMessageArgs>
): UseMutationResult<Message, PostgrestError, InsertMessageArgs> =>
  useMutation(insertMessage, options);
