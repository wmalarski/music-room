import { Message } from '@music-room/data-access';
import { Debug, SkeletonBox } from '@music-room/ui';
import { ReactElement } from 'react';

type Props = {
  message?: Message;
};

export const ChatMessage = ({ message }: Props): ReactElement => {
  if (!message) return <SkeletonBox height="xl" />;
  return <Debug value={message} />;
};
