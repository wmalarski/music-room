import { ReactElement } from 'react';
import { ChatInput } from './ChatInput/ChatInput';
import { ChatRoom } from './ChatRoom/ChatRoom';
import { InviteLink } from './InviteLink/InviteLink';

export const Chat = (): ReactElement => (
  <>
    <ChatRoom />
    <InviteLink />
    <ChatInput />
  </>
);
