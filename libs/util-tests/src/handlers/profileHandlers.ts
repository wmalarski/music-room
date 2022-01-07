import {
  Profile,
  TABLES_ENDPOINTS,
  UpdateProfileArgs,
} from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';

export const mockProfilesStorage = {
  get: (): Profile[] => JSON.parse(sessionStorage.getItem('profiles') ?? '[]'),
  set: (profiles: Profile[]): void => {
    return sessionStorage.setItem('profiles', JSON.stringify(profiles));
  },
};

export const profilesHandlers = [
  rest.get<DefaultRequestBody, never, Profile>(
    TABLES_ENDPOINTS.profiles,
    (_req, res, ctx) => res(ctx.json(mockProfilesStorage.get()[0]))
  ),
  rest.patch<UpdateProfileArgs, never, Profile>(
    TABLES_ENDPOINTS.profiles,
    ({ body }, res, ctx) => {
      const profiles = [...mockProfilesStorage.get()];
      const index = profiles.findIndex((profile) => profile.id === body.id);

      const profile = { ...profiles[index], ...body };
      profiles.splice(index, 1, profile);

      mockProfilesStorage.set(profiles);

      return res(ctx.json(profile));
    }
  ),
];
