import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomNavigation } from './RoomNavigation';

export default {
  title: 'Headers/RoomNavigation',
  component: RoomNavigation,
} as ComponentMeta<typeof RoomNavigation>;

const Template: ComponentStory<typeof RoomNavigation> = (args) => (
  <RoomNavigation {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  slug: 'abc',
};
