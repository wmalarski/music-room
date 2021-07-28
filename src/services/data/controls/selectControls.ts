import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Controls } from "../types";

export type SelectControlsArgs = {
  roomId: number;
};

export type SelectControlsKey = ["controls", SelectControlsArgs];

export const selectControlsKey = (
  args: SelectControlsArgs
): SelectControlsKey => ["controls", args];

export const selectControls = async ({
  queryKey: [, { roomId }],
}: QueryFunctionContext<SelectControlsKey>): Promise<Controls | null> => {
  const { data, error } = await fromSupabase("controls")
    .select("*")
    .eq("room_id", roomId)
    .single();

  if (error) throw error;

  return data;
};

export const useSelectControls = (
  args: SelectControlsArgs,
  options?: UseQueryOptions<
    Controls | null,
    PostgrestError,
    Controls | null,
    SelectControlsKey
  >
): UseQueryResult<Controls | null, PostgrestError> =>
  useQuery(selectControlsKey(args), selectControls, options);
