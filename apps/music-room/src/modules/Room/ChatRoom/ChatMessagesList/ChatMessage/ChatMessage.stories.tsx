import { defaultMessage } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessage } from './ChatMessage';

export default {
  title: 'Room/ChatMessage',
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => {
  return <ChatMessage {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  message: defaultMessage,
};
