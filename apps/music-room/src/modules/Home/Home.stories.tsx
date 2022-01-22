import {
  defaultProfile,
  Member,
  Profile,
  randomMembers,
  TABLES_ENDPOINTS,
  TestWrapper,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultRequestBody, rest } from 'msw';
import { Home } from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => {
  return (
    <TestWrapper>
      <Home />
    </TestWrapper>
  );
};

export const Playground = Template.bind({});

const members = randomMembers(200);

Playground.parameters = {
  msw: {
    handlers: [
      rest.get<DefaultRequestBody, { limit: string; offset: string }, Member[]>(
        TABLES_ENDPOINTS.members,
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
        TABLES_ENDPOINTS.profiles,
        (_req, res, ctx) => res(ctx.json(defaultProfile))
      ),
    ],
  },
};
