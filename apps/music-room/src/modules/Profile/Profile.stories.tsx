import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'Profile/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  center: 'center',
  header: 'header',
};
