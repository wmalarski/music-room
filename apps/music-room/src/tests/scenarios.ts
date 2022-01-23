import { createMockProfile } from './creators/profile';
import { createMockRoles } from './creators/roles';
import { createMockRoomWithAuthor as createMockRoomsWithAuthor } from './creators/room';
import { createMockUser } from './creators/user';

export const noRoomsUserScenario = () => {
  const userEntity = createMockUser();
  return {
    user: userEntity,
    profile: createMockProfile({
      userEntity,
      profile: { name: 'noRoomsUserName' },
    }),
  };
};

export const manyRoomsUserScenario = () => {
  const user = createMockUser();
  const profile = createMockProfile({
    userEntity: user,
    profile: { name: 'manyRoomsUserName' },
  });
  const rooms = createMockRoomsWithAuthor({
    author: profile,
    count: 200,
  });
  const roles = createMockRoles({
    profile,
    rooms,
    role: { role: 'owner' },
  });
  return {
    user,
    profile,
    rooms,
    roles,
  };
};

export const fewRoomsUserScenario = () => {
  const user = createMockUser();
  const profile = createMockProfile({
    userEntity: user,
    profile: { name: 'fewRoomsUserName' },
  });
  const rooms = createMockRoomsWithAuthor({
    author: profile,
    count: 4,
  });
  const roles = createMockRoles({
    profile,
    rooms,
    role: { role: 'owner' },
  });
  return {
    user: user,
    profile: profile,
    rooms,
    roles,
  };
};

type ScenariosResults = {
  noRoomsUserScenario: ReturnType<typeof noRoomsUserScenario>;
  manyRoomsUserScenario: ReturnType<typeof manyRoomsUserScenario>;
  fewRoomsUserScenario: ReturnType<typeof fewRoomsUserScenario>;
};

export let scenarios: ScenariosResults | null = null;

export const loadScenarios = (): void => {
  scenarios = {
    fewRoomsUserScenario: fewRoomsUserScenario(),
    manyRoomsUserScenario: manyRoomsUserScenario(),
    noRoomsUserScenario: noRoomsUserScenario(),
  };
};
