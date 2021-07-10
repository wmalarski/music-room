import { SelectMessagesReturn } from "../../../services/data/messages/selectMessages";

export type ChatMessageProps = {
  message: SelectMessagesReturn;
};

const ChatMessage = ({ message }: ChatMessageProps): JSX.Element => {
  return <pre>{JSON.stringify(message, null, 2)}</pre>;
};

export default ChatMessage;
