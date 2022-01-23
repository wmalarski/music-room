import { Member, TABLES_ENDPOINTS } from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';
import { convert, mockDb } from '../models';
import { getEqParam } from './utils';

export const membersHandlers = [
  rest.get<DefaultRequestBody, never, Member[]>(
    TABLES_ENDPOINTS.members,
    (req, res, ctx) => {
      const offset = Number(req.url.searchParams.get('offset'));
      const limit = Number(req.url.searchParams.get('limit'));
      const roomId = getEqParam(req, 'room_id');
      const userId = getEqParam(req, 'user_id');

      const where = {
        ...(userId
          ? { profile_id: { user_id: { id: { equals: userId } } } }
          : {}),
        ...(roomId ? { room_id: { id: { equals: Number(roomId) } } } : {}),
      };

      const count = mockDb.role.count({ where });
      const rolesEntities = mockDb.role.findMany({
        where,
        take: limit,
        skip: offset,
      });

      const roles = rolesEntities.flatMap((role) => {
        const member = convert.toMember(role);
        return member ? [member] : [];
      });

      const range = `${offset}-${offset + limit}/${count}`;

      return res(ctx.json(roles), ctx.set('content-range', range));
    }
  ),
];
