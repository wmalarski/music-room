import { PropsWithTestWrapper, TestWrapper } from '@music-room/data-access';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { handlers } from '../../../tests/handlers';
import { convert } from '../../../tests/models';
import { scenarios } from '../../../tests/scenarios';
import { ChatRoom } from './ChatRoom';

export default {
  title: 'Room/ChatRoom',
  component: ChatRoom,
} as ComponentMeta<typeof ChatRoom>;

const ChatRoomStory = ({ wrapperProps }: PropsWithTestWrapper) => {
  return (
    <TestWrapper {...wrapperProps}>
      <ChatRoom />
    </TestWrapper>
  );
};

const Template: ComponentStory<typeof ChatRoomStory> = ChatRoomStory;

export const Playground = Template.bind({});
Playground.parameters = { msw: { handlers } };
Playground.args = {
  wrapperProps: {
    profile: convert.toProfile(scenarios?.roomWithManyMessages.profile),
    role: convert.toRole(scenarios?.roomWithManyMessages.role),
    room: convert.toRoom(scenarios?.roomWithManyMessages.room),
    user: convert.toUser(scenarios?.roomWithManyMessages.user),
  },
};
