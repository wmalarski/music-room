import {
  defaultRole,
  defaultRoom,
  defaultUser,
  Member,
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
import { DefaultRequestBody, rest } from 'msw';
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
      rest.get<DefaultRequestBody, never, Member[]>(
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
    role: defaultRole,
    user: defaultUser,
  },
};

export const Mod = Template.bind({});
Mod.parameters = parameters;
Mod.args = {
  wrapperProps: {
    role: { ...defaultRole, role: 'mod' },
    user: defaultUser,
  },
};

export const Owner = Template.bind({});
Owner.parameters = parameters;
Owner.args = {
  wrapperProps: {
    role: { ...defaultRole, role: 'owner' },
    user: defaultUser,
  },
};
