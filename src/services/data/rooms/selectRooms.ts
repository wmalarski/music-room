import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Room } from "../types";

export type SelectRoomsArgs = Partial<Room>;

export type SelectRoomsKey = ["rooms", SelectRoomsArgs];

export const selectRooms = async ({
  queryKey: [, args],
}: QueryFunctionContext<SelectRoomsKey>): Promise<Room[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof Room, value),
    supabase.from<Room>("rooms").select("*")
  );

  if (error || !data) throw error;

  return data;
};

export const selectRoomsKey = (args: SelectRoomsArgs): SelectRoomsKey => [
  "rooms",
  args,
];

export const useSelectRooms = (
  args: SelectRoomsArgs,
  options?: UseQueryOptions<Room[], PostgrestError, Room[], SelectRoomsKey>
): UseQueryResult<Room[], PostgrestError> =>
  useQuery(selectRoomsKey(args), selectRooms, options);
