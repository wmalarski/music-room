import {
  defaultMember,
  defaultProfile,
  defaultUser,
  Member,
  Profile,
  SUPABASE_ENDPOINT,
  TABLES,
  UserContext,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultRequestBody, rest } from 'msw';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <UserContext.Provider value={defaultUser}>
    <QueryClientProvider client={new QueryClient()}>
      <Home {...args} />
    </QueryClientProvider>
  </UserContext.Provider>
);

export const Playground = Template.bind({});
Playground.args = {
  user: defaultUser,
};

Playground.parameters = {
  msw: {
    handlers: [
      rest.get<DefaultRequestBody, { limit: string }, Member[]>(
        `${SUPABASE_ENDPOINT}/${TABLES.members}`,
        (req, res, ctx) => res(ctx.json([defaultMember]))
      ),
      rest.get<DefaultRequestBody, never, Profile>(
        `${SUPABASE_ENDPOINT}/${TABLES.profiles}`,
        (_req, res, ctx) => res(ctx.json(defaultProfile))
      ),
    ],
  },
};
