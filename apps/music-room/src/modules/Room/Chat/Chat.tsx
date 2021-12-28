import React from 'react';
import { ChatInput, ChatRoom, InviteLink } from '../../../molecules';

const Chat = (): JSX.Element => (
  <>
    <ChatRoom />
    <InviteLink />
    <ChatInput />
  </>
);

export default Chat;
