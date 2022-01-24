import {
  defaultPostgrestError,
  Profile,
  TABLES_ENDPOINTS,
  UpdateProfileArgs,
} from '@music-room/data-access';
import { PostgrestError } from '@supabase/supabase-js';
import { DefaultRequestBody, rest } from 'msw';
import { convert, mockDb } from '../models';
import { getEqParam } from './utils';

export const profilesHandlers = [
  rest.get<DefaultRequestBody, never, Profile | PostgrestError>(
    TABLES_ENDPOINTS.profiles,
    (req, res, ctx) => {
      const userId = getEqParam(req, 'user_id');

      if (!userId)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      const entity = mockDb.profile.findFirst({
        where: { user_id: { id: { equals: userId } } },
      });

      const profile = convert.toProfile(entity);

      if (!profile)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      return res(ctx.json<Profile>(profile));
    }
  ),
  rest.patch<UpdateProfileArgs, never, Profile | PostgrestError>(
    TABLES_ENDPOINTS.profiles,
    (req, res, ctx) => {
      const entity = mockDb.profile.update({
        where: { id: { equals: req.body.id } },
        data: req.body,
      });

      const profile = convert.toProfile(entity);

      if (!profile)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      return res(ctx.json<Profile>(profile));
    }
  ),
];
