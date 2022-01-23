import { defaultRole, Role } from '@music-room/data-access';
import { mockDb, MockEntity } from '../models';

type CreateMockRoleArgs = {
  profile: MockEntity<'profile'>;
  room: MockEntity<'room'>;
  role?: Pick<Role, 'role'>;
};

export const createMockRole = ({ profile, room, role }: CreateMockRoleArgs) => {
  return mockDb.role.create({
    profile_id: profile,
    role: role?.role ?? defaultRole.role,
    room_id: room,
  });
};

type CreateMockRolesArgs = {
  profile: MockEntity<'profile'>;
  rooms: MockEntity<'room'>[];
  role?: Pick<Role, 'role'>;
};

export const createMockRoles = ({
  profile,
  rooms,
  role,
}: CreateMockRolesArgs) => {
  return rooms.map((room) =>
    createMockRole({
      profile,
      room,
      role,
    })
  );
};
