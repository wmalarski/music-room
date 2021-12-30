import { setupServer } from 'msw/node';
import { actionHandlers } from './handlers/actionHandlers';
import { usersHandlers } from './handlers/authHandlers';
import { membersHandlers } from './handlers/membersHandlers';
import { messagesHandlers } from './handlers/messageHandlers';
import { profilesHandlers } from './handlers/profileHandlers';
import { rolesHandlers } from './handlers/rolesHandlers';
import { roomsHandlers } from './handlers/roomsHandlers';

export const server = setupServer(
  ...actionHandlers,
  ...messagesHandlers,
  ...membersHandlers,
  ...profilesHandlers,
  ...roomsHandlers,
  ...rolesHandlers,
  ...usersHandlers
);
