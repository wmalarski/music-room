import {
  AUTH_ENDPOINT,
  defaultError,
  defaultUser,
  ResponseError,
} from '@music-room/data-access';
import { Session, UserCredentials } from '@supabase/supabase-js';
import { rest } from 'msw';
import { convert, dbIndexCounter, mockDb } from '../models';

export const authHandlers = [
  rest.post<UserCredentials, never, Session | ResponseError>(
    `${AUTH_ENDPOINT}/token`,
    (req, res, ctx) => {
      const userEntity = mockDb.user.findFirst({
        where: { email: { equals: req.body.email } },
      });
      const user = convert.toUser(userEntity);

      if (!user)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const result = {
        access_token: 'eyJ.eyJ.CY80',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
        user,
      };

      return res(ctx.json<Session>(result));
    }
  ),
  rest.post<UserCredentials, never, Session | ResponseError>(
    `${AUTH_ENDPOINT}/signup`,
    (req, res, ctx) => {
      const count = mockDb.user.count({
        where: { email: { equals: req.body.email } },
      });

      if (count > 0)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      const id = String(dbIndexCounter());
      const user = { ...defaultUser, ...req.body };
      mockDb.user.create({
        id,
        email: req.body.email,
      });

      const result = {
        access_token: 'eyJ.eyJ.CY80',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
        user,
      };

      return res(ctx.json<Session>(result));
    }
  ),
];
