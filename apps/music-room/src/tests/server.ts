import { setupServer } from 'msw/node';
import { actionHandlers } from './handlers/action';
import { authHandlers } from './handlers/auth';
import { controlsHandlers } from './handlers/controls';
import { membersHandlers } from './handlers/members';
import { messagesHandlers } from './handlers/message';
import { profilesHandlers } from './handlers/profile';
import { rolesHandlers } from './handlers/roles';
import { roomHandlers } from './handlers/rooms';

export const handlers = [
  ...actionHandlers,
  ...authHandlers,
  ...controlsHandlers,
  ...membersHandlers,
  ...messagesHandlers,
  ...profilesHandlers,
  ...rolesHandlers,
  ...roomHandlers,
];

export const server = setupServer(...handlers);
