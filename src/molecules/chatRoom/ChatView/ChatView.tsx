import React from "react";
import { Message } from "../../../services/data/types";
import ChatMessage from "../ChatMessage/ChatMessage";

export type ChatViewProps = {
  messages?: Message[];
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
