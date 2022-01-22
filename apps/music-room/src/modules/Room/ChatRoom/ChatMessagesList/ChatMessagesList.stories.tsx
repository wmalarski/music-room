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
  offset: 1,
  onOffsetChange: () => void 0,
  data: {
    messages: [
      { ...defaultMessage, id: 1 },
      { ...defaultMessage, id: 2 },
    ],
    count: 2,
    offset: 0,
  },
};
