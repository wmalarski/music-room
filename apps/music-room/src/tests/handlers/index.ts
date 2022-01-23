import { actionHandlers } from './action';
import { authHandlers } from './auth';
import { controlsHandlers } from './controls';
import { membersHandlers } from './members';
import { messagesHandlers } from './message';
import { profilesHandlers } from './profile';
import { rolesHandlers } from './roles';
import { roomHandlers } from './rooms';

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
