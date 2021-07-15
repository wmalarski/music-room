import React from "react";
import ChatInput from "../../molecules/chatInput/ChatInput/ChatInput";
import ChatRoom from "../../molecules/chatRoom/ChatRoom/ChatRoom";
import InviteLink from "../../molecules/inviteLink/InviteLink/InviteLink";

const ChatView = (): JSX.Element => (
  <>
    <ChatRoom />
    <InviteLink />
    <ChatInput />
  </>
);

export default ChatView;
