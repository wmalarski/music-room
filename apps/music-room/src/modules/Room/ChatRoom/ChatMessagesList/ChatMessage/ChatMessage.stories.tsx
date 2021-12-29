import { defaultMessage } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessage } from './ChatMessage';

export default {
  title: 'Chat/ChatMessage',
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <ChatMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: defaultMessage,
};
