import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { selectAllMembersKey } from "../members/selectMembers";
import { Room } from "../types";
import { selectRoomByHashKey } from "./selectRoomByHash";

export type DeleteRoomArgs = {
  id: number;
};

export const deleteRoom = async (args: DeleteRoomArgs): Promise<Room> => {
  const { data, error } = await fromSupabase("rooms")
    .delete()
    .eq("id", args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useDeleteRoom = (
  options?: UseMutationOptions<Room, PostgrestError, DeleteRoomArgs>
): UseMutationResult<Room, PostgrestError, DeleteRoomArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteRoom, {
    ...options,
    onSuccess: (room, ...args) => {
      options?.onSuccess?.(room, ...args);
      queryClient.invalidateQueries(selectAllMembersKey());
      queryClient.invalidateQueries(selectRoomByHashKey({ hash: room.hash }));
    },
  });
};
