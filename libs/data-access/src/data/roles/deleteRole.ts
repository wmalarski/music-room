import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { selectAllMembersKey } from '../members/selectMembers';
import { Role } from '../types';

export type DeleteRoleArgs = Pick<Role, 'id'>;

export const deleteRole = async ({ id }: DeleteRoleArgs): Promise<void> => {
  const { error } = await fromSupabase('roles').delete().eq('id', id);

  if (error) throw error;
};

export const useDeleteRole = (
  options?: UseMutationOptions<void, PostgrestError, DeleteRoleArgs>
): UseMutationResult<void, PostgrestError, DeleteRoleArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteRole, {
    ...options,
    onSuccess: (role, ...args) => {
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(role, ...args);
    },
  });
};
