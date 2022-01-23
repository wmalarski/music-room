import { User } from '@supabase/supabase-js';
import { dbIndexCounter, mockDb, MockEntity } from '../models';
import { randomString } from './utils';

export type CreateMockUserArgs = {
  user?: Partial<User>;
};

export const createMockUser = ({
  user,
}: CreateMockUserArgs = {}): MockEntity<'user'> => {
  const userId = String(dbIndexCounter());

  return mockDb.user.create({
    email: user?.email ?? `${randomString()}@${randomString()}.com`,
    id: userId,
  });
};

type CreateMockUsersArgs = {
  count: number;
};

export const createMockUsers = ({
  count,
}: CreateMockUsersArgs): MockEntity<'user'>[] => {
  return Array(count)
    .fill(0)
    .map(() => createMockUser());
};
