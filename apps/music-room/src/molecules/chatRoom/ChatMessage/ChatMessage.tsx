import React from "react";
import { Debug } from "../../../atoms";
import { Message } from "../../../services/data/types";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps): JSX.Element => (
  <Debug value={message} />
);

export default ChatMessage;
