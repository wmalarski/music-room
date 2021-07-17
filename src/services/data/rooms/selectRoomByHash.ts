import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Room } from "../types";

export type SelectRoomByHashArgs = Pick<Room, "hash">;

export type SelectRoomByHashKey = ["roomByHash", SelectRoomByHashArgs];

export const selectRoomByHashKey = (
  args: SelectRoomByHashArgs
): SelectRoomByHashKey => ["roomByHash", args];

export const selectRoomByHash = async ({
  queryKey: [, { hash }],
}: QueryFunctionContext<SelectRoomByHashKey>): Promise<Room[]> => {
  const { data, error } = await supabase
    .rpc<Room>("room_by_hash", { input_hash: hash })
    .select("*");

  if (error || !data) throw error;

  return data;
};

export const useSelectRoomByHash = (
  args: SelectRoomByHashArgs,
  options?: UseQueryOptions<Room[], PostgrestError, Room[], SelectRoomByHashKey>
): UseQueryResult<Room[], PostgrestError> =>
  useQuery(selectRoomByHashKey(args), selectRoomByHash, options);
