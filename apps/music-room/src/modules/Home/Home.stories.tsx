import { defaultUser } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
