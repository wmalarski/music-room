import { Debug } from '@music-room/ui';
import { ReactElement } from 'react';
import { Message } from '../../../../../../services/data/types';

type Props = {
  message: Message;
};

export const ChatMessage = ({ message }: Props): ReactElement => (
  <Debug value={message} />
);
