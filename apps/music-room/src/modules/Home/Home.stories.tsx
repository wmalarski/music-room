import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { defaultUser } from '../../services/utils/defaults';
import { Home } from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  user: defaultUser,
};
