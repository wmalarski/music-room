import {
  defaultRoom,
  PropsWithTestWrapper,
  randomMembers,
  ResponseError,
  Role,
  Room,
  TABLES_ENDPOINTS,
  TestWrapper,
  UpdateRolesArgs,
  UpdateRoomArgs,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { rest } from 'msw';
import { membersHandlers } from '../../tests/handlers/members';
import { convert } from '../../tests/models';
import { scenarios } from '../../tests/scenarios';
import { Settings } from './Settings';

export default {
  title: 'Settings/Settings',
  component: Settings,
} as ComponentMeta<typeof Settings>;

const SettingsStory = ({ wrapperProps }: PropsWithTestWrapper) => {
  return (
    <TestWrapper {...wrapperProps}>
      <Settings />
    </TestWrapper>
  );
};

const Template: ComponentStory<typeof SettingsStory> = SettingsStory;

const members = randomMembers(200);

const parameters = {
  msw: {
    handlers: [
      ...membersHandlers,
      rest.patch<UpdateRoomArgs, never, Room | ResponseError>(
        TABLES_ENDPOINTS.rooms,
        (req, res, ctx) => {
          return res(ctx.json<Room>({ ...defaultRoom, ...req.body }));
        }
      ),
      rest.patch<UpdateRolesArgs, never, Role | ResponseError>(
        TABLES_ENDPOINTS.roles,
        (req, res, ctx) => {
          const member = members.find((member) => member.id === req.body.id);
          if (!member)
            return res(
              ctx.json<ResponseError>({
                error: 'No entry',
                error_description: 'Wrong item id',
              })
            );
          member.role = req.body.role;
          return res(ctx.json<Role>(member));
        }
      ),
    ],
  },
};

export const User = Template.bind({});
User.parameters = parameters;
User.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.userRoles[0]),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.profiles[0]),
    user: convert.toUser(scenarios?.roomWithManyUsers.users[0]),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};

export const Mod = Template.bind({});
Mod.parameters = parameters;
Mod.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.modRole),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.mod),
    user: convert.toUser(scenarios?.roomWithManyUsers.mod.user_id),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};

export const Owner = Template.bind({});
Owner.parameters = parameters;
Owner.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.authorRole),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.author),
    user: convert.toUser(scenarios?.roomWithManyUsers.author.user_id),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};
