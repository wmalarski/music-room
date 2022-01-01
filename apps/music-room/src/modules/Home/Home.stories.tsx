import {
  defaultProfile,
  defaultUser,
  Member,
  Profile,
  randomMembers,
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

const Template: ComponentStory<typeof Home> = () => (
  <UserContext.Provider value={defaultUser}>
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  </UserContext.Provider>
);

export const Playground = Template.bind({});

Playground.args = {
  user: defaultUser,
};

const members = randomMembers(200);

Playground.parameters = {
  msw: {
    handlers: [
      rest.get<DefaultRequestBody, { limit: string; offset: string }, Member[]>(
        `${SUPABASE_ENDPOINT}/${TABLES.members}`,
        (req, res, ctx) => {
          const offset = Number(req.url.searchParams.get('offset'));
          const limit = Number(req.url.searchParams.get('limit'));
          const range = `${offset}-${offset + limit}/${members.length}`;
          return res(
            ctx.json(members.slice(offset, offset + limit)),
            ctx.set('content-range', range)
          );
        }
      ),
      rest.get<DefaultRequestBody, never, Profile>(
        `${SUPABASE_ENDPOINT}/${TABLES.profiles}`,
        (_req, res, ctx) => res(ctx.json(defaultProfile))
      ),
    ],
  },
};
