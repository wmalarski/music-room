import { defaultRoom, Room } from '@music-room/data-access';
import { mockDb, MockEntity } from '../models';
import { randomString } from './utils';

type CreateMockRoomArgs = {
  author: MockEntity<'profile'>;
  room?: Partial<Room>;
};

export const createMockRoom = ({ author, room }: CreateMockRoomArgs) => {
  return mockDb.room.create({
    data: room?.data ?? defaultRoom.data,
    hash: room?.hash ?? randomString(),
    name: room?.name ?? randomString(),
    slug: room?.slug ?? randomString(),
    author_id: author,
  });
};

type CreateMockRoomsWithAuthorArgs = {
  author: MockEntity<'profile'>;
  count: number;
};

export const createMockRoomWithAuthor = ({
  author,
  count,
}: CreateMockRoomsWithAuthorArgs) => {
  return Array(count)
    .fill(0)
    .map(() => createMockRoom({ author }));
};
