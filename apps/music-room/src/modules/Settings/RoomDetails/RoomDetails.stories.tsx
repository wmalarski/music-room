import { defaultRoom, RoomContextProvider } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomDetails } from './RoomDetails';

export default {
  title: 'Settings/RoomDetails',
  component: RoomDetails,
} as ComponentMeta<typeof RoomDetails>;

const Template: ComponentStory<typeof RoomDetails> = () => (
  <RoomContextProvider room={defaultRoom}>
    <RoomDetails />
  </RoomContextProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  roomName: 'roomName',
};
