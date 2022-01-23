import {
  defaultError,
  Profile,
  ResponseError,
  TABLES_ENDPOINTS,
  UpdateProfileArgs,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';
import { convert, mockDb } from '../models';

export const profilesHandlers = [
  rest.get<DefaultRequestBody, never, Profile | ResponseError>(
    TABLES_ENDPOINTS.profiles,
    (req, res, ctx) => {
      const id = req.url.searchParams.get('user_id');
      const [, userId] = (id ?? '').split('.');
      if (!userId)
        return res(
          ctx.json<ResponseError>({
            ...defaultError,
            error_description: JSON.stringify(userId),
          }),
          ctx.status(400)
        );

      const entity = mockDb.profile.findFirst({
        where: { user_id: { id: { equals: userId } } },
      });
      const profile = convert.toProfile(entity);
      if (!profile)
        return res(
          ctx.json<ResponseError>({
            ...defaultError,
            error_description: JSON.stringify({
              userId,
              entity,
              profile,
              count: mockDb.profile.count(),
            }),
          }),
          ctx.status(400)
        );

      return res(ctx.json<Profile>(profile));
    }
  ),
  rest.patch<UpdateProfileArgs, never, Profile | ResponseError>(
    TABLES_ENDPOINTS.profiles,
    (req, res, ctx) => {
      const entity = mockDb.profile.update({
        where: { id: { equals: req.body.id } },
        data: req.body,
      });
      const profile = convert.toProfile(entity);
      if (!profile)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Profile>(profile));
    }
  ),
];
