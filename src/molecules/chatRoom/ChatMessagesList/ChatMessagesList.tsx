import React from "react";
import { Message } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";
import ChatMessage from "../ChatMessage/ChatMessage";

export type ChatMessagesListProps = {
  messages?: Message[];
  onLoadMore?: () => void;
};

const ChatMessagesList = ({
  messages,
  onLoadMore,
}: ChatMessagesListProps): JSX.Element => {
  const text = useText();

  return (
    <>
      {[...(messages ?? [])].reverse().map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <button onClick={onLoadMore}>{text("loadMoreMessages")}</button>
    </>
  );
};

export default ChatMessagesList;
