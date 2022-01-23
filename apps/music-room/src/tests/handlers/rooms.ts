import {
  defaultError,
  ResponseError,
  Room,
  TABLES_ENDPOINTS,
  UpdateRoomArgs,
} from '@music-room/data-access';
import { rest } from 'msw';
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
];
