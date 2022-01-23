import { defaultUser } from '@music-room/data-access';
import { User } from '@supabase/supabase-js';
import { dbIndexCounter, mockDb, MockEntity } from '../models';

export type CreateMockUserArgs = {
  user?: Partial<User>;
};

export const createMockUser = ({
  user,
}: CreateMockUserArgs = {}): MockEntity<'user'> => {
  const userId = String(dbIndexCounter());

  return mockDb.user.create({
    email: user?.email ?? defaultUser.email,
    id: userId,
  });
};
