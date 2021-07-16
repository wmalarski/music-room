import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { RoomProfile } from "../types";

const ROOM_PROFILES_PAGE_LIMIT = 20;

export type SelectRoomProfilesArgs = Partial<RoomProfile>;

export type SelectRoomProfilesKey = ["roomProfiles", SelectRoomProfilesArgs];

export const selectAllRoomProfilesKey = (): QueryKey => ["roomProfiles"];

export const selectRoomProfilesKey = (
  args: SelectRoomProfilesArgs
): SelectRoomProfilesKey => ["roomProfiles", args];

export const selectRoomProfiles = async ({
  queryKey: [, args],
  pageParam = 0,
}: QueryFunctionContext<SelectRoomProfilesKey>): Promise<RoomProfile[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof RoomProfile, value),
    supabase
      .from<RoomProfile>("room_roles")
      .select("*")
      .range(pageParam, pageParam + ROOM_PROFILES_PAGE_LIMIT)
  );

  if (error || !data) throw error;

  return data;
};

export const useSelectRoomProfiles = (
  args: SelectRoomProfilesArgs,
  options?: UseInfiniteQueryOptions<
    RoomProfile[],
    PostgrestError,
    RoomProfile[],
    RoomProfile[],
    SelectRoomProfilesKey
  >
): UseInfiniteQueryResult<RoomProfile[], PostgrestError> =>
  useInfiniteQuery(selectRoomProfilesKey(args), selectRoomProfiles, options);
