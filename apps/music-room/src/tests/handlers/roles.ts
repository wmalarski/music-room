import {
  defaultPostgrestError,
  DeleteRoleArgs,
  InsertRoleArgs,
  Role,
  SupabaseErrorCode,
  TABLES_ENDPOINTS,
  UpdateRolesArgs,
} from '@music-room/data-access';
import { PostgrestError } from '@supabase/supabase-js';
import { rest } from 'msw';
import { createMockRole } from '../creators/roles';
import { convert, mockDb } from '../models';

export const rolesHandlers = [
  rest.patch<UpdateRolesArgs, never, Role | PostgrestError>(
    TABLES_ENDPOINTS.roles,
    (req, res, ctx) => {
      const roleEntity = mockDb.role.update({
        where: { id: { equals: req.body.id } },
        data: req.body,
      });

      const role = convert.toRole(roleEntity);

      if (!role)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      return res(ctx.json<Role>(role));
    }
  ),
  rest.post<InsertRoleArgs, never, Role | PostgrestError>(
    TABLES_ENDPOINTS.roles,
    (req, res, ctx) => {
      const profile = mockDb.profile.findFirst({
        where: { id: { equals: req.body.profile_id } },
      });

      const room = mockDb.room.findFirst({
        where: { id: { equals: req.body.room_id } },
      });

      if (!profile || !room)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      const existingProfile = mockDb.role.findFirst({
        where: {
          profile_id: { id: { equals: req.body.profile_id } },
          room_id: { id: { equals: req.body.room_id } },
        },
      });

      if (existingProfile)
        return res(
          ctx.json<PostgrestError>({
            ...defaultPostgrestError,
            code: SupabaseErrorCode.UniquenessViolation,
          }),
          ctx.status(400)
        );

      const roleEntity = createMockRole({
        profile,
        room,
        role: { role: req.body.role },
      });

      const role = convert.toRole(roleEntity);

      if (!role)
        return res(
          ctx.json<PostgrestError>(defaultPostgrestError),
          ctx.status(400)
        );

      return res(ctx.json<Role>(role));
    }
  ),
  rest.delete<DeleteRoleArgs>(TABLES_ENDPOINTS.roles, (req, res, ctx) => {
    const [, id] = req.url.searchParams.get('id')?.split('.') ?? '';
    if (!id)
      return res(
        ctx.json<PostgrestError>(defaultPostgrestError),
        ctx.status(400)
      );

    mockDb.role.delete({
      where: { id: { equals: Number(id) } },
    });

    return res(ctx.json({}));
  }),
];
