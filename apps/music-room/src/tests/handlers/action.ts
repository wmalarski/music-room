import {
  Action,
  defaultError,
  ResponseError,
  TABLES_ENDPOINTS,
  UpsertActionArgs,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';
import { createMockAction } from '../creators/action';
import { convert, mockDb } from '../models';
import { getEqParam } from './utils';

export const actionHandlers = [
  rest.get<DefaultRequestBody, never, Action[] | ResponseError>(
    TABLES_ENDPOINTS.actions,
    (req, res, ctx) => {
      const limit = Number(req.url.searchParams.get('limit') ?? '0');
      const messageId = getEqParam(req, 'message_id');
      const profileId = getEqParam(req, 'profile_id');

      const actionsEntities = mockDb.action.findMany({
        take: limit,
        where: {
          ...(messageId
            ? { message_id: { id: { equals: Number(messageId) } } }
            : {}),
          ...(profileId
            ? { profile_id: { id: { equals: Number(profileId) } } }
            : {}),
        },
      });

      const actions = actionsEntities.flatMap((entity) => {
        const action = convert.toAction(entity);
        return action ? [action] : [];
      });

      return res(ctx.json<Action[]>(actions));
    }
  ),
  rest.post<UpsertActionArgs, never, Action | ResponseError>(
    TABLES_ENDPOINTS.actions,
    (req, res, ctx) => {
      const actionExistingEntity = mockDb.action.findFirst({
        where: { id: { equals: req.body.id } },
      });

      if (actionExistingEntity) {
        const actionEntity = mockDb.action.update({
          where: { id: { equals: req.body.id } },
          data: { like_at: req.body.like_at, dislike_at: req.body.dislike_at },
        });
        const action = convert.toAction(actionEntity);

        if (!action)
          return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

        return res(ctx.json<Action>(action));
      }

      const message = mockDb.message.findFirst({
        where: { id: { equals: req.body.message_id } },
      });

      const profile = mockDb.profile.findFirst({
        where: { id: { equals: req.body.profile_id } },
      });

      if (!message || !profile)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const actionEntity = createMockAction({
        message,
        profile,
      });

      const action = convert.toAction(actionEntity);

      if (!action)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Action>(action));
    }
  ),
];
