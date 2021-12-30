import { defaultMessage } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChatMessagesList } from './ChatMessagesList';

export default {
  title: 'Room/ChatMessagesList',
  component: ChatMessagesList,
} as ComponentMeta<typeof ChatMessagesList>;

const Template: ComponentStory<typeof ChatMessagesList> = (args) => (
  <ChatMessagesList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  messages: [
    { ...defaultMessage, id: 1 },
    { ...defaultMessage, id: 2 },
  ],
  onLoadMore: () => null,
};
