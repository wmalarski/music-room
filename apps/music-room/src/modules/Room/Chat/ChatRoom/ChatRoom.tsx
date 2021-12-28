import { useSelectMessages } from '../../../../services/data/messages/selectMessages';
import { useSubscribeToMessages } from '../../../../services/data/messages/subscribeToMessages';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import ChatMessagesList, {
  ChatMessagesListProps,
} from './ChatMessagesList/ChatMessagesList';

export type ChatRoomProps = {
  View?: React.ComponentType<ChatMessagesListProps>;
};

const ChatRoom = ({ View = ChatMessagesList }: ChatRoomProps): JSX.Element => {
  const { room_id } = useMemberContext();

  useSubscribeToMessages({ roomId: room_id });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId: room_id });

  return <View messages={pages?.pages.flat()} onLoadMore={fetchNextPage} />;
};

export default ChatRoom;
