import {
  defaultMember,
  defaultRoom,
  defaultUser,
  Member,
  PropsWithTestWrapper,
  randomMembers,
  ResponseError,
  Room,
  TABLES_ENDPOINTS,
  TestWrapper,
  UpdateRoomArgs,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DefaultRequestBody, rest } from 'msw';
import { Settings } from './Settings';

export default {
  title: 'Settings/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const SettingsStory = ({ wrapperProps }: PropsWithTestWrapper) => (
  <TestWrapper {...wrapperProps}>
    <Settings />
  </TestWrapper>
);

const Template: ComponentStory<typeof SettingsStory> = SettingsStory;

const members = randomMembers(200);

const parameters = {
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
      rest.patch<UpdateRoomArgs, never, Room | ResponseError>(
        TABLES_ENDPOINTS.rooms,
        (req, res, ctx) => {
          return res(ctx.json<Room>({ ...defaultRoom, ...req.body }));
        }
      ),
    ],
  },
};

export const User = Template.bind({});
User.parameters = parameters;
User.args = {
  wrapperProps: {
    member: defaultMember,
    user: defaultUser,
  },
};

export const Mod = Template.bind({});
Mod.parameters = parameters;
Mod.args = {
  wrapperProps: {
    member: { ...defaultMember, role: 'mod' },
    user: defaultUser,
  },
};

export const Owner = Template.bind({});
Owner.parameters = parameters;
Owner.args = {
  wrapperProps: {
    member: { ...defaultMember, role: 'owner' },
    user: defaultUser,
  },
};
