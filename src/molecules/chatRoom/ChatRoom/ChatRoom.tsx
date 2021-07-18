import { useSelectMessages } from "../../../services/data/messages/selectMessages";
import { useSubscribeToMessages } from "../../../services/data/messages/subscribeToMessages";
import { useMemberContext } from "../../../utils/room/RoomContext";
import ChatMessagesList from "../ChatMessagesList/ChatMessagesList";

const ChatRoom = (): JSX.Element => {
  const { room_id } = useMemberContext();

  useSubscribeToMessages({ roomId: room_id });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId: room_id });

  return (
    <ChatMessagesList
      messages={pages?.pages.flat()}
      onLoadMore={fetchNextPage}
    />
  );
};

export default ChatRoom;
