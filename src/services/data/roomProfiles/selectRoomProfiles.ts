import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { RoomProfile } from "../types";

export type SelectRoomProfilesArgs = Partial<
  Pick<RoomProfile, "room_id" | "slug" | "user_id">
>;

export type SelectRoomProfilesKey = ["roomProfiles", SelectRoomProfilesArgs];

export const selectRoomProfilesAllKey = (): QueryKey => ["roomProfiles"];

export const selectRoomProfilesKey = (
  args: SelectRoomProfilesArgs
): SelectRoomProfilesKey => ["roomProfiles", args];

export const selectRoomProfiles = async ({
  queryKey: [, args],
}: QueryFunctionContext<SelectRoomProfilesKey>): Promise<RoomProfile[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof RoomProfile, value),
    supabase.from<RoomProfile>("room_roles").select("*")
  );

  if (error || !data) throw error;

  return data;
};

export const useSelectRoomProfiles = (
  args: SelectRoomProfilesArgs,
  options?: UseQueryOptions<
    RoomProfile[],
    PostgrestError,
    RoomProfile[],
    SelectRoomProfilesKey
  >
): UseQueryResult<RoomProfile[], PostgrestError> =>
  useQuery(selectRoomProfilesKey(args), selectRoomProfiles, options);
