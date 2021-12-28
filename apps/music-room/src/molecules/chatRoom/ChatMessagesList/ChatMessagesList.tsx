import React from "react";
import { Button } from "../../../atoms";
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
      <Button onClick={onLoadMore}>{text("loadMoreMessages")}</Button>
    </>
  );
};

export default ChatMessagesList;
