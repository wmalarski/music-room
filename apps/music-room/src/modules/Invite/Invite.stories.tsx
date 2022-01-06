import {
  defaultProfile,
  defaultUser,
  Profile,
  TABLES_ENDPOINTS,
  UserContext,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultRequestBody, rest } from 'msw';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Invite } from './Invite';

export default {
  title: 'Invite/Invite',
  component: Invite,
} as ComponentMeta<typeof Invite>;

const Template: ComponentStory<typeof Invite> = () => (
  <UserContext.Provider value={defaultUser}>
    <QueryClientProvider client={new QueryClient()}>
      <Invite />
    </QueryClientProvider>
  </UserContext.Provider>
);

export const Playground = Template.bind({});

Playground.parameters = {
  msw: {
    handlers: [
      rest.get<DefaultRequestBody, never, Profile>(
        TABLES_ENDPOINTS.profiles,
        (_req, res, ctx) => res(ctx.json(defaultProfile))
      ),
    ],
  },
};
