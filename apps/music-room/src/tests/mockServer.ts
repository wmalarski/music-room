import {
  actionHandlers,
  membersHandlers,
  messagesHandlers,
  profilesHandlers,
  rolesHandlers,
  roomsHandlers,
} from '@music-room/data-access';
import { setupServer } from 'msw/node';
import { usersHandlers } from '../../../../libs/data-access/src/auth/authHandlers';

const server = setupServer(
  ...actionHandlers,
  ...messagesHandlers,
  ...membersHandlers,
  ...profilesHandlers,
  ...roomsHandlers,
  ...rolesHandlers,
  ...usersHandlers
);

export default server;
