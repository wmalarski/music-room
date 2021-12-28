import { ReactElement } from 'react';
import { useSelectMessages } from '../../../../services/data/messages/selectMessages';
import { useSubscribeToMessages } from '../../../../services/data/messages/subscribeToMessages';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';

type Props = {
  View?: typeof ChatMessagesList;
};

export const ChatRoom = ({ View = ChatMessagesList }: Props): ReactElement => {
  const { room_id } = useMemberContext();

  useSubscribeToMessages({ roomId: room_id });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId: room_id });

  return (
    <View
      messages={pages?.pages.reduce((prev, curr) => [...prev, ...curr])}
      onLoadMore={fetchNextPage}
    />
  );
};
