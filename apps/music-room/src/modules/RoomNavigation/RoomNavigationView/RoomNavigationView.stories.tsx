import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomNavigationView } from './RoomNavigationView';

export default {
  title: 'RoomNavigation/RoomNavigationView',
  component: RoomNavigationView,
} as ComponentMeta<typeof RoomNavigationView>;

const Template: ComponentStory<typeof RoomNavigationView> = (args) => (
  <RoomNavigationView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  slug: 'abc',
};
