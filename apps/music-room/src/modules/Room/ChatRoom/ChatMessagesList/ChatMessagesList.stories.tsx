import { defaultMessage } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { defaultVirtualizer } from '../../../../tests/mocks';
import { ChatMessagesList } from './ChatMessagesList';

export default {
  title: 'Room/ChatMessagesList',
  component: ChatMessagesList,
} as ComponentMeta<typeof ChatMessagesList>;

const Template: ComponentStory<typeof ChatMessagesList> = (args) => {
  return <ChatMessagesList {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  data: {
    messages: [
      { ...defaultMessage, id: 1 },
      { ...defaultMessage, id: 2 },
    ],
    count: 2,
    offset: 0,
  },
  parentRef: { current: null },
  virtualizer: defaultVirtualizer({
    count: 2,
    height: 80,
    totalLength: 2,
  }),
};
