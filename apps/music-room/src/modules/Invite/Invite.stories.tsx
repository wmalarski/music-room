import {
  defaultProfile,
  Profile,
  TABLES_ENDPOINTS,
  TestWrapper,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultRequestBody, rest } from 'msw';
import { Invite } from './Invite';

export default {
  title: 'Invite/Invite',
  component: Invite,
} as ComponentMeta<typeof Invite>;

const Template: ComponentStory<typeof Invite> = () => (
  <TestWrapper>
    <Invite />
  </TestWrapper>
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
