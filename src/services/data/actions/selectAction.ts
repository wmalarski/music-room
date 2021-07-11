import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Action } from "../types";

export type SelectActionArgs = {
  messageId: number | null;
  profileId: number;
};

export type SelectActionKey = ["action", SelectActionArgs];

export const selectActionKey = (args: SelectActionArgs): SelectActionKey => [
  "action",
  args,
];

export const selectAction = async ({
  queryKey: [, { messageId, profileId }],
}: QueryFunctionContext<SelectActionKey>): Promise<Action | null> => {
  if (!messageId) return null;

  const { data, error } = await supabase
    .from<Action>("actions")
    .select("*")
    .eq("message_id", messageId)
    .eq("profile_id", profileId)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectAction = (
  args: SelectActionArgs,
  options?: UseQueryOptions<
    Action | null,
    PostgrestError,
    Action | null,
    SelectActionKey
  >
): UseQueryResult<Action | null, PostgrestError> =>
  useQuery(selectActionKey(args), selectAction, options);
