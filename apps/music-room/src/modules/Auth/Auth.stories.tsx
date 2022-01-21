import {
  AUTH_ENDPOINT,
  defaultUser,
  ResponseError,
  TestWrapper,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Session } from '@supabase/supabase-js';
import { rest } from 'msw';
import { Auth } from './Auth';

export default {
  title: 'Auth/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<never> = () => (
  <TestWrapper>
    <Auth />
  </TestWrapper>
);

export const Failure = Template.bind({});

Failure.parameters = {
  msw: {
    handlers: [
      rest.post<string, never, Session | ResponseError>(
        `${AUTH_ENDPOINT}/token`,
        (_req, res, ctx) =>
          res(
            ctx.json<ResponseError>({
              error: 'invalid_grant',
              error_description: 'Invalid login credentials',
            }),
            ctx.status(400)
          )
      ),
      rest.post<string, never, Session | ResponseError>(
        `${AUTH_ENDPOINT}/signup`,
        (_req, res, ctx) =>
          res(
            ctx.json<ResponseError>({
              error: 'invalid_grant',
              error_description: 'User with this username exists',
            }),
            ctx.status(400)
          )
      ),
    ],
  },
};

export const Success = Template.bind({});

Success.parameters = {
  msw: {
    handlers: [
      rest.post<string, never, Session | ResponseError>(
        `${AUTH_ENDPOINT}/token`,
        (_req, res, ctx) =>
          res(
            ctx.json<Session>({
              access_token: 'eyJ.eyJ.CY80',
              token_type: 'bearer',
              expires_in: 3600,
              refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
              user: defaultUser,
            })
          )
      ),
      rest.post<string, never, Session | ResponseError>(
        `${AUTH_ENDPOINT}/signup`,
        (_req, res, ctx) =>
          res(
            ctx.json<Session>({
              access_token: 'eyJ.eyJ.CY80',
              token_type: 'bearer',
              expires_in: 3600,
              refresh_token: 'kHMih_-mwYUn08FTYMhx2g',
              user: defaultUser,
            })
          )
      ),
    ],
  },
};
