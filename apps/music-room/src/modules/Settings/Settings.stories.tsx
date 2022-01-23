import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { handlers } from '../../tests/handlers';
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

export const User = Template.bind({});
User.parameters = { msw: { handlers } };
User.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.userRoles[0]),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.profiles[0]),
    user: convert.toUser(scenarios?.roomWithManyUsers.users[0]),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};

export const Mod = Template.bind({});
Mod.parameters = { msw: { handlers } };
Mod.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.modRole),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.mod),
    user: convert.toUser(scenarios?.roomWithManyUsers.mod.user_id),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};

export const Owner = Template.bind({});
Owner.parameters = { msw: { handlers } };
Owner.args = {
  wrapperProps: {
    role: convert.toRole(scenarios?.roomWithManyUsers.authorRole),
    profile: convert.toProfile(scenarios?.roomWithManyUsers.author),
    user: convert.toUser(scenarios?.roomWithManyUsers.author.user_id),
    room: convert.toRoom(scenarios?.roomWithManyUsers.room),
  },
};
