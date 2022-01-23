import { setupServer } from 'msw/node';
import { actionHandlers } from './handlers/action';
import { authHandlers } from './handlers/auth';
import { membersHandlers } from './handlers/members';
import { messagesHandlers } from './handlers/message';
import { profilesHandlers } from './handlers/profile';
import { rolesHandlers } from './handlers/roles';
import { roomHandlers } from './handlers/rooms';

export const server = setupServer(
  ...actionHandlers,
  ...authHandlers,
  ...membersHandlers,
  ...messagesHandlers,
  ...profilesHandlers,
  ...rolesHandlers,
  ...roomHandlers
);
