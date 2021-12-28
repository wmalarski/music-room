import { Button } from '@music-room/ui';
import { ReactElement } from 'react';
import { Message } from '../../../../../services/data/types';
import useText from '../../../../../utils/translations/useText';
import { ChatMessage } from './ChatMessage/ChatMessage';

type Props = {
  messages?: Message[];
  onLoadMore?: () => void;
};

export const ChatMessagesList = ({
  messages,
  onLoadMore,
}: Props): ReactElement => {
  const text = useText();

  return (
    <>
      {[...(messages ?? [])].reverse().map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <Button onClick={onLoadMore}>{text('loadMoreMessages')}</Button>
    </>
  );
};
