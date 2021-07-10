import { Message } from "../../../services/data/types";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps): JSX.Element => {
  return <pre>{JSON.stringify(message, null, 2)}</pre>;
};

export default ChatMessage;
