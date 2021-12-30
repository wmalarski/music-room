import {
  AUTH_ENDPOINT,
  defaultUser,
  ResponseError,
} from '@music-room/data-access';
import { Session, User, UserCredentials } from '@supabase/supabase-js';
import { rest } from 'msw';

export const mockUserStorage = {
  get: (): User[] => JSON.parse(sessionStorage.getItem('users') ?? '[]'),
  set: (users: User[]): void =>
    sessionStorage.setItem('users', JSON.stringify(users)),
};

export const usersHandlers = [
  rest.post<string, never, Session | ResponseError>(
    `${AUTH_ENDPOINT}/token`,
    ({ body }, res, ctx) => {
      const credentials: UserCredentials = JSON.parse(body);
      const users = mockUserStorage.get();

      const user = users.find((elem) => elem.email === credentials.email);

      if (!user)
        return res(
          ctx.json<ResponseError>({
            error: 'invalid_grant',
            error_description: 'Invalid login credentials',
          }),
          ctx.status(400)
        );

      const result = {
        access_token: 'eyJ.eyJ.CY80',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
        user,
      };

      return res(ctx.json<Session>(result));
    }
  ),
  rest.post<string, never, Session | ResponseError>(
    `${AUTH_ENDPOINT}/signup`,
    ({ body }, res, ctx) => {
      const credentials: UserCredentials = JSON.parse(body);

      const user = {
        ...defaultUser,
        ...credentials,
      };

      mockUserStorage.set([...mockUserStorage.get(), user]);

      const result = {
        access_token: 'eyJ.eyJ.CY80',
        token_type: 'bearer',
        expires_in: 3600,
        refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
        user,
      };

      return res(ctx.json<Session>(result));
    }
  ),
];
