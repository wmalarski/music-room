import { roomsHandlers } from '@music-room/util-tests';
import { setupServer } from 'msw/node';
import { membersHandlers } from './handlers/members';
import { profilesHandlers } from './handlers/profile';
import { rolesHandlers } from './handlers/roles';

export const server = setupServer(
  ...profilesHandlers,
  ...membersHandlers,
  ...rolesHandlers,
  ...roomsHandlers
);
