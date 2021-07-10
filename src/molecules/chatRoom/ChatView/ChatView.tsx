import React from "react";
import { SelectMessagesReturn } from "../../../services/data/messages/selectMessages";
import ChatMessage from "../ChatMessage/ChatMessage";

export type ChatViewProps = {
  messages?: SelectMessagesReturn[];
  onLoadMore?: () => void;
};

const ChatView = ({ messages, onLoadMore }: ChatViewProps): JSX.Element => {
  return (
    <>
      {[...(messages ?? [])].reverse().map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <button onClick={onLoadMore}>Load More</button>
    </>
  );
};

export default ChatView;
