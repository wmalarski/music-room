import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { selectRoomProfilesAllKey } from "../roomProfiles/selectRoomProfiles";
import { Room } from "../types";

export type InsertRoomArgs = Omit<Room, "id" | "hash">;

export const insertRoom = async (args: InsertRoomArgs): Promise<Room> => {
  const { data, error } = await supabase
    .from<Room>("rooms")
    .insert(args)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useInsertRoom = (
  options?: UseMutationOptions<Room, PostgrestError, InsertRoomArgs>
): UseMutationResult<Room, PostgrestError, InsertRoomArgs> => {
  const queryClient = useQueryClient();
  return useMutation(insertRoom, {
    ...options,
    onSuccess: (room, ...args) => {
      queryClient.invalidateQueries(selectRoomProfilesAllKey());
      options?.onSuccess?.(room, ...args);
    },
  });
};
