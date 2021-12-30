import {
  DeleteRoleArgs,
  InsertRoleArgs,
  Role,
  SUPABASE_ENDPOINT,
  TABLES,
  UpdateRolesArgs,
} from '@music-room/data-access';
import { rest } from 'msw';
import { mockMembersStorage } from './membersHandlers';

export const mockRolesStorage = {
  get: (): Role[] =>
    mockMembersStorage.get().map((member) => ({
      id: member.id,
      profile_id: member.profile_id,
      role: member.role,
      room_id: member.room_id,
    })),
  set: (roles: Role[]): void => {
    const member = mockMembersStorage.getContext();
    if (!member) {
      console.warn('no mock member context');
      return;
    }

    mockMembersStorage.set(
      roles.map((role) => ({
        ...member,
        role_id: role.id,
        profile_id: role.profile_id,
        role: role.role,
        room_id: role.room_id,
      }))
    );
  },
};

export const rolesHandlers = [
  rest.post<InsertRoleArgs, never, Role>(
    `${SUPABASE_ENDPOINT}/${TABLES.roles}`,
    ({ body }, res, ctx) => {
      const roles = mockRolesStorage.get();

      const id = Math.max(...roles.map((action) => action.id), 0) + 1;

      const role: Role = { id, ...body };

      mockRolesStorage.set([...roles, role]);

      return res(ctx.json(role));
    }
  ),
  rest.patch<UpdateRolesArgs, never, Role>(
    `${SUPABASE_ENDPOINT}/${TABLES.roles}`,
    ({ body }, res, ctx) => {
      const roles = [...mockRolesStorage.get()];
      const index = roles.findIndex((room) => room.id === body.id);

      const role = { ...roles[index], ...body };
      roles.splice(index, 1, role);

      mockRolesStorage.set(roles);

      return res(ctx.json(role));
    }
  ),
  rest.delete<DeleteRoleArgs>(
    `${SUPABASE_ENDPOINT}/${TABLES.roles}`,
    ({ url }, res, ctx) => {
      const query = url.searchParams.get('id')?.split('.')[1];
      if (!query) return res(ctx.json({}));
      const id = Number(query);

      const roles = mockRolesStorage.get();
      mockRolesStorage.set(roles.filter((role) => role.id !== id));

      return res(ctx.json({}));
    }
  ),
];
