import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import { useSetRoom } from '../../contexts/RoomContext';
import fromSupabase from '../../utils/fromSupabase';
import { selectAllMembersKey } from '../members/selectMembers';
import { Room, RoomData } from '../types';
import { selectRoomByHashKey } from './selectRoomByHash';

export type UpdateRoomArgs = {
  id: number;
  name?: string;
  slug?: string;
  data?: RoomData;
};

export const updateRoom = async (args: UpdateRoomArgs): Promise<Room> => {
  const { data, error } = await fromSupabase('rooms')
    .update(args)
    .eq('id', args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateRoom = (
  options?: UseMutationOptions<Room, PostgrestError, UpdateRoomArgs>
): UseMutationResult<Room, PostgrestError, UpdateRoomArgs> => {
  const queryClient = useQueryClient();
  const setRoom = useSetRoom();

  return useMutation(updateRoom, {
    ...options,
    onSuccess: (room, ...args) => {
      options?.onSuccess?.(room, ...args);
      setRoom(room);
      queryClient.invalidateQueries(selectAllMembersKey());
      queryClient.invalidateQueries(selectRoomByHashKey({ hash: room.hash }));
    },
  });
};
