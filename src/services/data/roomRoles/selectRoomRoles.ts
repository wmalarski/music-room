import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { RoomRoles } from "../types";

export type SelectRoomRolesArgs = Partial<
  Pick<RoomRoles, "room_id" | "slug" | "user_id">
>;

export type SelectRoomRolesKey = ["roomRoles", SelectRoomRolesArgs];

export const selectRoomRolesAllKey = (): QueryKey => ["profileRoles"];

export const selectRoomRolesKey = (
  args: SelectRoomRolesArgs
): SelectRoomRolesKey => ["roomRoles", args];

export const selectRoomRoles = async ({
  queryKey: [, args],
}: QueryFunctionContext<SelectRoomRolesKey>): Promise<RoomRoles[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof RoomRoles, value),
    supabase.from<RoomRoles>("roomroles").select("*")
  );

  if (error || !data) throw error;

  return data;
};

export const useSelectRoomRoles = (
  args: SelectRoomRolesArgs,
  options?: UseQueryOptions<
    RoomRoles[],
    PostgrestError,
    RoomRoles[],
    SelectRoomRolesKey
  >
): UseQueryResult<RoomRoles[], PostgrestError> =>
  useQuery(selectRoomRolesKey(args), selectRoomRoles, options);
