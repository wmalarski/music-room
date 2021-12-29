import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomDetailsView } from './RoomDetailsView';

export default {
  title: 'Settings/RoomDetailsView',
  component: RoomDetailsView,
} as ComponentMeta<typeof RoomDetailsView>;

const Template: ComponentStory<typeof RoomDetailsView> = (args) => (
  <RoomDetailsView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  roomName: 'roomName',
};
