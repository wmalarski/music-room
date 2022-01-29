import { Message } from '@music-room/data-access';
import { Flex, SkeletonBox, Typography } from '@music-room/ui';
import { ReactElement } from 'react';

type Props = {
  message?: Message;
};

export const ChatMessage = ({ message }: Props): ReactElement => {
  if (!message) return <SkeletonBox height="xl" />;
  return (
    <Flex direction="column">
      <Typography>{message.data.url}</Typography>
      <Typography>{message.created_at}</Typography>
    </Flex>
  );
};
