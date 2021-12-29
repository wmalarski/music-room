import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DeleteRoomView } from './DeleteRoomView';

export default {
  title: 'Settings/DeleteRoomView',
  component: DeleteRoomView,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
} as ComponentMeta<typeof DeleteRoomView>;

const Template: ComponentStory<typeof DeleteRoomView> = (args) => (
  <DeleteRoomView {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  onClicked: () => null,
};
