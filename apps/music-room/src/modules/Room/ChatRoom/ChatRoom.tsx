import {
  useSelectMessages,
  useSubscribeToMessages,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { useRoom } from '../../../utils/contexts/RoomContext';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';

type Props = {
  View?: typeof ChatMessagesList;
};

export const ChatRoom = ({ View = ChatMessagesList }: Props): ReactElement => {
  const { id: roomId } = useRoom();

  useSubscribeToMessages({ roomId });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId });

  return (
    <View
      messages={pages?.pages.reduce((prev, curr) => [...prev, ...curr])}
      onLoadMore={fetchNextPage}
    />
  );
};
