import {
  defaultError,
  InsertMessageArgs,
  Message,
  ResponseError,
  TABLES_ENDPOINTS,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';
import { createMockMessage } from '../creators/message';
import { convert, mockDb } from '../models';

export const messagesHandlers = [
  rest.get<DefaultRequestBody, never, Message[]>(
    TABLES_ENDPOINTS.messages,
    (req, res, ctx) => {
      const offset = Number(req.url.searchParams.get('offset') ?? '0');
      const limit = Number(req.url.searchParams.get('limit'));
      const [, roomId] = (req.url.searchParams.get('room_id') ?? '').split('.');

      const where = {
        ...(roomId ? { room_id: { id: { equals: Number(roomId) } } } : {}),
      };

      const count = mockDb.message.count({ where });
      const messagesEntities = mockDb.message.findMany({
        where,
        take: limit,
        skip: offset,
      });
      const messages = messagesEntities.flatMap((entity) => {
        const message = convert.toMessage(entity);
        return message ? [message] : [];
      });

      const range = `${offset}-${offset + limit}/${count}`;

      return res(ctx.json(messages), ctx.set('content-range', range));
    }
  ),
  rest.post<InsertMessageArgs, never, Message | ResponseError>(
    TABLES_ENDPOINTS.messages,
    (req, res, ctx) => {
      const room = mockDb.room.findFirst({
        where: { id: { equals: req.body.room_id } },
      });

      const profile = mockDb.profile.findFirst({
        where: { id: { equals: req.body.profile_id } },
      });

      if (!room || !profile)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const messageEntity = createMockMessage({
        profile,
        room,
        message: req.body,
      });

      const message = convert.toMessage(messageEntity);

      if (!message)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Message>(message));
    }
  ),
];
