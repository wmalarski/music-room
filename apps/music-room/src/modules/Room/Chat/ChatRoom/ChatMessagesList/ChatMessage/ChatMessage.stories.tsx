import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { defaultMessage } from '../../../../../../services/utils/defaults';
import ChatMessage from './ChatMessage';

export default {
  title: 'Molecules/ChatRoom/ChatMessage',
  component: ChatMessage,
} as ComponentMeta<typeof ChatMessage>;

const Template: ComponentStory<typeof ChatMessage> = (args) => (
  <ChatMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  message: defaultMessage,
};