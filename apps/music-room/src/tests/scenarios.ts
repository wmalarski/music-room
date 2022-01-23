import { createMockMessages } from './creators/message';
import { createMockProfile, createMockProfiles } from './creators/profile';
import { createMockRole, createMockRoles } from './creators/roles';
import {
  createMockRoom,
  createMockRoomWithAuthor as createMockRoomsWithAuthor,
} from './creators/room';
import { createMockUser, createMockUsers } from './creators/user';

export const userWithRoomsScenario = (roomsCount: number) => {
  const user = createMockUser();
  const author = createMockProfile({ user });
  const rooms = createMockRoomsWithAuthor({ author, count: roomsCount });
  const roles = createMockRoles({
    profiles: [author],
    rooms,
    role: { role: 'owner' },
  });
  return { user, author, rooms, roles };
};

export const roomWithUsersScenario = (usersCount: number) => {
  const users = createMockUsers({ count: usersCount });
  const [author, mod, ...profiles] = createMockProfiles({ users });
  const room = createMockRoom({ author });
  const [authorRole] = createMockRoles({
    profiles: [author],
    rooms: [room],
    role: { role: 'owner' },
  });
  const [modRole] = createMockRoles({
    profiles: [mod],
    rooms: [room],
    role: { role: 'mod' },
  });
  const userRoles = createMockRoles({
    profiles: profiles,
    rooms: [room],
    role: { role: 'user' },
  });
  return { users, author, mod, profiles, room, authorRole, modRole, userRoles };
};

export const roomWithMessagesScenario = (messagesCount: number) => {
  const user = createMockUser();
  const profile = createMockProfile({ user });
  const room = createMockRoom({ author: profile });
  const role = createMockRole({
    profile: profile,
    room: room,
    role: { role: 'owner' },
  });
  const messages = createMockMessages({
    profile,
    room,
    count: messagesCount,
  });
  return { user, profile, room, role, messages };
};

type ScenariosResults = {
  noRoomsUser: ReturnType<typeof userWithRoomsScenario>;
  manyRoomsUser: ReturnType<typeof userWithRoomsScenario>;
  fewRoomsUser: ReturnType<typeof userWithRoomsScenario>;
  roomWithFewUsers: ReturnType<typeof roomWithUsersScenario>;
  roomWithManyUsers: ReturnType<typeof roomWithUsersScenario>;
  roomWithManyMessages: ReturnType<typeof roomWithMessagesScenario>;
  roomWithNoMessages: ReturnType<typeof roomWithMessagesScenario>;
};

export let scenarios: ScenariosResults | null = null;

export const loadScenarios = (): void => {
  scenarios = {
    fewRoomsUser: userWithRoomsScenario(0),
    manyRoomsUser: userWithRoomsScenario(200),
    noRoomsUser: userWithRoomsScenario(4),
    roomWithFewUsers: roomWithUsersScenario(4),
    roomWithManyUsers: roomWithUsersScenario(100),
    roomWithManyMessages: roomWithMessagesScenario(100),
    roomWithNoMessages: roomWithMessagesScenario(0),
  };
};
