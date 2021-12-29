import { Message } from '@music-room/data-access';
import { Debug } from '@music-room/ui';
import { ReactElement } from 'react';

type Props = {
  message: Message;
};

export const ChatMessage = ({ message }: Props): ReactElement => (
  <Debug value={message} />
);
