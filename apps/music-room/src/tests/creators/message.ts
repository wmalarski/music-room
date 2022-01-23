import { defaultMessage, Message } from '@music-room/data-access';
import { mockDb, MockEntity } from '../models';

type CreateMockMessageArgs = {
  profile: MockEntity<'profile'>;
  room: MockEntity<'room'>;
  message?: Partial<Message>;
};

export const createMockMessage = ({
  message,
  profile,
  room,
}: CreateMockMessageArgs): MockEntity<'message'> => {
  return mockDb.message.create({
    created_at: new Date().toISOString(),
    data: message?.data ?? defaultMessage.data,
    ended_at: null,
    profile_id: profile,
    room_id: room,
  });
};

type CreateMockMessagesArgs = {
  profile: MockEntity<'profile'>;
  room: MockEntity<'room'>;
  count: number;
};

export const createMockMessages = ({
  profile,
  room,
  count,
}: CreateMockMessagesArgs) => {
  return Array(count)
    .fill(0)
    .map(() => createMockMessage({ profile, room }));
};
