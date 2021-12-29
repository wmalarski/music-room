import { defaultProfile } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CreateRoomView } from './CreateRoomView';

export default {
  title: 'Home/CreateRoomView',
  component: CreateRoomView,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof CreateRoomView>;

const Template: ComponentStory<typeof CreateRoomView> = (args) => (
  <CreateRoomView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  profile: defaultProfile,
  error: null,
  isLoading: false,
  onSubmit: () => null,
};
