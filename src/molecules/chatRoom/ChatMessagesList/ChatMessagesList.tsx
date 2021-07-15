import React from "react";
import { Message } from "../../../services/data/types";
import ChatMessage from "../ChatMessage/ChatMessage";

export type ChatMessagesListProps = {
  messages?: Message[];
  onLoadMore?: () => void;
};

const ChatMessagesList = ({
  messages,
  onLoadMore,
}: ChatMessagesListProps): JSX.Element => (
  <>
    {[...(messages ?? [])].reverse().map((message) => (
      <ChatMessage key={message.id} message={message} />
    ))}
    <button onClick={onLoadMore}>Load More</button>
  </>
);

export default ChatMessagesList;
