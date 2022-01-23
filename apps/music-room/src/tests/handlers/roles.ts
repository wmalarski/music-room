import {
  defaultError,
  ResponseError,
  Role,
  TABLES_ENDPOINTS,
  UpdateRolesArgs,
} from '@music-room/data-access';
import { rest } from 'msw';
import { convert, mockDb } from '../models';

export const rolesHandlers = [
  rest.patch<UpdateRolesArgs, never, Role | ResponseError>(
    TABLES_ENDPOINTS.roles,
    (req, res, ctx) => {
      const roleEntity = mockDb.role.update({
        where: { id: { equals: req.body.id } },
        data: req.body,
      });
      const role = convert.toRole(roleEntity);
      if (!role)
        return res(ctx.json<ResponseError>(defaultError), ctx.status(400));

      return res(ctx.json<Role>(role));
    }
  ),
];
