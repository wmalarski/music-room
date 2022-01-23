import { setupServer } from 'msw/node';
import { authHandlers } from './handlers/auth';
import { membersHandlers } from './handlers/members';
import { profilesHandlers } from './handlers/profile';
import { rolesHandlers } from './handlers/roles';
import { roomHandlers } from './handlers/rooms';

export const server = setupServer(
  ...profilesHandlers,
  ...membersHandlers,
  ...rolesHandlers,
  ...roomHandlers,
  ...authHandlers
);
