import {
  DeleteRoomArgs,
  InsertRoomArgs,
  Room,
  SUPABASE_ENDPOINT,
  TABLES,
  UpdateRoomArgs,
} from '@music-room/data-access';
import { rest } from 'msw';
import { mockMembersStorage } from './membersHandlers';

export const mockRoomsStorage = {
  get: (): Room[] =>
    mockMembersStorage.get().map((member) => ({
      author_id: member.room_author_id,
      hash: member.room_hash,
      id: member.room_id,
      name: member.room_name,
      slug: member.room_slug,
      data: { kind: 'room#0.0.1' },
    })),
  set: (rooms: Room[]): void => {
    const member = mockMembersStorage.getContext();
    if (!member) {
      console.warn('no mock member context');
      return;
    }
    mockMembersStorage.set(
      rooms.map((room) => ({
        ...member,
        author_id: room.author_id,
        data: room.data,
        hash: room.hash,
        room_id: room.id,
        room_name: room.name,
        slug: room.slug,
      }))
    );
  },
};

export const roomsHandlers = [
  rest.post<InsertRoomArgs, never, Room>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ body }, res, ctx) => {
      const rooms = mockRoomsStorage.get();

      const id = Math.max(...rooms.map((action) => action.id), 0) + 1;

      const room: Room = { id, hash: String(id), ...body };

      mockRoomsStorage.set([...rooms, room]);

      return res(ctx.json(room));
    }
  ),
  rest.patch<UpdateRoomArgs, never, Room>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ body }, res, ctx) => {
      const rooms = [...mockRoomsStorage.get()];
      const index = rooms.findIndex((room) => room.id === body.id);

      const room = { ...rooms[index], ...body };
      rooms.splice(index, 1, room);

      mockRoomsStorage.set(rooms);

      return res(ctx.json(room));
    }
  ),
  rest.delete<DeleteRoomArgs>(
    `${SUPABASE_ENDPOINT}/${TABLES.rooms}`,
    ({ url }, res, ctx) => {
      const query = url.searchParams.get('id')?.split('.')[1];
      if (!query) return res(ctx.json({}));
      const id = Number(query);

      const rooms = mockRoomsStorage.get();
      mockRoomsStorage.set(rooms.filter((room) => room.id !== id));

      return res(ctx.json({}));
    }
  ),
];
