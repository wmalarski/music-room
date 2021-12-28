import React from 'react';
import { Message } from '../../../../../../services/data/types';
import { Debug } from '../../../atoms';

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps): JSX.Element => (
  <Debug value={message} />
);

export default ChatMessage;
