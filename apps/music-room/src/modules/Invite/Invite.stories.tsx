import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import {
  defaultProfile,
  defaultRoom,
  defaultUser,
} from '../../services/utils/defaults';
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
