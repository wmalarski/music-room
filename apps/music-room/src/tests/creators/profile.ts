import { Profile } from '@music-room/data-access';
import { mockDb, MockEntity } from '../models';
import { createMockUser } from './user';
import { randomString } from './utils';

type CreateMockProfileArgs = {
  userEntity: MockEntity<'user'>;
  profile?: Partial<Omit<Profile, 'id' | 'user_id'>>;
};

export const createMockProfile = ({
  userEntity,
  profile,
}: CreateMockProfileArgs): MockEntity<'profile'> => {
  return mockDb.profile.create({
    avatar: profile?.avatar ?? null,
    name: profile?.name ?? randomString(),
    user_id: userEntity,
  });
};

type CreateMockProfilesArgs = {
  count: number;
};

export const createMockProfiles = ({
  count,
}: CreateMockProfilesArgs): MockEntity<'profile'>[] => {
  return Array(count)
    .fill(0)
    .map(() => createMockProfile({ userEntity: createMockUser() }));
};
