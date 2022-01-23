import {
  defaultError,
  DeleteRoomArgs,
  InsertRoomArgs,
  ResponseError,
  Room,
  TABLES_ENDPOINTS,
  UpdateRoomArgs,
} from '@music-room/data-access';
import { rest } from 'msw';
import { createMockRoom } from '../creators/room';
import { convert, mockDb } from '../models';

export const roomHandlers = [
  rest.patch<UpdateRoomArgs, never, Room | ResponseError>(
    TABLES_ENDPOINTS.rooms,
    (req, res, ctx) => {
      const roomEntity = mockDb.room.update({
        where: { id: { equals: req.body.id } },
        data: req.body,
      });
      const room = convert.toRoom(roomEntity);

      if (!room)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Room>(room));
    }
  ),
  rest.post<InsertRoomArgs, never, Room | ResponseError>(
    TABLES_ENDPOINTS.rooms,
    (req, res, ctx) => {
      const author = mockDb.profile.findFirst({
        where: { id: { equals: req.body.author_id } },
      });
      if (!author)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const roomEntity = createMockRoom({ author, room: req.body });
      const room = convert.toRoom(roomEntity);

      if (!room)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Room>(room));
    }
  ),
  rest.delete<DeleteRoomArgs>(TABLES_ENDPOINTS.rooms, (req, res, ctx) => {
    const [, id] = req.url.searchParams.get('id')?.split('.') ?? '';
    if (!id) return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

    mockDb.room.delete({
      where: { id: { equals: Number(id) } },
    });

    return res(ctx.json({}));
  }),
];
