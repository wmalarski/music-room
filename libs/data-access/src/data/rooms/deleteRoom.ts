import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { selectAllMembersKey } from '../members/selectMembers';
import { selectRoomByHashKey } from './selectRoomByHash';

export type DeleteRoomArgs = {
  id: number;
};

export const deleteRoom = async (args: DeleteRoomArgs): Promise<void> => {
  const { error, body, count, data, status, statusText } = await fromSupabase(
    'rooms'
  )
    .delete({ count: 'exact', returning: 'representation' })
    .match({ id: args.id });

  console.log({ args, error, body, count, data, status, statusText });

  if (error) throw error;
};

export const useDeleteRoom = (
  roomHash: string,
  options?: UseMutationOptions<void, PostgrestError, DeleteRoomArgs>
): UseMutationResult<void, PostgrestError, DeleteRoomArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteRoom, {
    ...options,
    onSuccess: (...args) => {
      options?.onSuccess?.(...args);
      queryClient.invalidateQueries(selectAllMembersKey());
      queryClient.invalidateQueries(selectRoomByHashKey({ hash: roomHash }));
    },
  });
};
