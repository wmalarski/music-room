import {
  defaultProfile,
  defaultRoom,
  defaultUser,
} from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Invite } from './Invite';

export default {
  title: 'Invite/Invite',
  component: Invite,
} as ComponentMeta<typeof Invite>;

const Template: ComponentStory<typeof Invite> = (args) => <Invite {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  room: defaultRoom,
  user: defaultUser,
  profile: defaultProfile,
};
