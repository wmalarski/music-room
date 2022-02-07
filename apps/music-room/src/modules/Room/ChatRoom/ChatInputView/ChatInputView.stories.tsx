import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatInputView } from './ChatInputView';

export default {
  title: 'Room/ChatInputView',
  component: ChatInputView,
  argTypes: { onSubmit: { action: 'onSubmit' } },
} as ComponentMeta<typeof ChatInputView>;

const Template: ComponentStory<typeof ChatInputView> = (args) => {
  return <ChatInputView {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  onSubmit: () => null,
};
