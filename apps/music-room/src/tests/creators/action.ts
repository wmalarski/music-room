import { mockDb, MockEntity } from '../models';

type CreateMockActionArgs = {
  message: MockEntity<'message'>;
  profile: MockEntity<'profile'>;
};

export const createMockAction = ({
  message,
  profile,
}: CreateMockActionArgs): MockEntity<'action'> => {
  return mockDb.action.create({
    created_at: new Date().toISOString(),
    dislike_at: null,
    like_at: null,
    message_id: message,
    profile_id: profile,
    updated_at: new Date().toISOString(),
  });
};
