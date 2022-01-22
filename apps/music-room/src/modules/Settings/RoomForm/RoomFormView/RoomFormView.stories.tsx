import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RoomFormView } from './RoomFormView';

export default {
  title: 'Settings/RoomFormView',
  component: RoomFormView,
} as ComponentMeta<typeof RoomFormView>;

const Template: ComponentStory<typeof RoomFormView> = (args) => {
  return <RoomFormView {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  error: null,
  isLoading: false,
  onSubmit: () => null,
  roomName: 'roomName',
};
