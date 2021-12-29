import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomDetails } from './RoomDetails';

export default {
  title: 'Settings/RoomDetails',
  component: RoomDetails,
} as ComponentMeta<typeof RoomDetails>;

const Template: ComponentStory<typeof RoomDetails> = (args) => (
  <RoomDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  roomName: 'roomName',
};
