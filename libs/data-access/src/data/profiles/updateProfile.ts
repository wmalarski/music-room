import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import { useSetProfile } from '../../contexts/ProfileContext';
import fromSupabase from '../../utils/fromSupabase';
import { selectAllMembersKey } from '../members/selectMembers';
import { Member, Profile } from '../types';
import { selectProfileKey } from './selectProfile';

export type UpdateProfileArgs = Pick<Profile, 'id' | 'name'>;

export type UpdateProfileContext = {
  previousProfile?: Profile;
  previousMembers?: Member[];
  nextProfile?: Partial<Profile>;
  nextMembers?: Member[];
};

export const updateProfile = async ({
  id,
  name,
}: UpdateProfileArgs): Promise<Profile> => {
  const { data, error } = await fromSupabase('profiles')
    .update({ id, name })
    .eq('id', id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateProfile = (
  userId: string,
  options?: UseMutationOptions<
    Profile,
    PostgrestError,
    UpdateProfileArgs,
    UpdateProfileContext
  >
): UseMutationResult<
  Profile,
  PostgrestError,
  UpdateProfileArgs,
  UpdateProfileContext
> => {
  const setProfile = useSetProfile();
  const queryClient = useQueryClient();
  const profileKey = selectProfileKey({ userId });
  const membersKey = selectAllMembersKey();

  return useMutation(updateProfile, {
    ...options,
    onMutate: async (profile) => {
      await Promise.all([
        queryClient.cancelQueries(profileKey),
        queryClient.cancelQueries(membersKey),
      ]);

      const previousProfile = queryClient.getQueryData<Profile>(profileKey);
      const previousMembers = queryClient.getQueryData<Member[]>(membersKey);

      const nextProfile = { ...previousProfile, ...profile };
      const nextMembers = previousMembers?.map((member) => {
        if (member.profile_id !== profile.id) return member;
        return { ...member, profile_name: profile.name };
      });

      queryClient.setQueryData(profileKey, nextProfile);
      queryClient.setQueryData(membersKey, nextMembers);

      return { previousProfile, previousMembers, nextProfile, nextMembers };
    },
    onError: (err, controls, context) => {
      queryClient.setQueryData(profileKey, context?.previousProfile);
      queryClient.setQueryData(membersKey, context?.previousMembers);
      options?.onError?.(err, controls, context);
    },
    onSettled: (profile, ...args) => {
      if (profile) setProfile(profile);
      queryClient.invalidateQueries(profileKey);
      queryClient.invalidateQueries(membersKey);
      options?.onSettled?.(profile, ...args);
    },
  });
};
