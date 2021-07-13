import { useInsertMessage } from "../../../services/data/messages/insertMessage";
import { useSelectMessages } from "../../../services/data/messages/selectMessages";
import { useSubscribeToMessages } from "../../../services/data/messages/subscribeToMessages";
import { useRoomContext } from "../../../utils/room/RoomContext";
import ChatInput from "../ChatInput/ChatInput";
import ChatView from "../ChatView/ChatView";

const ChatRoom = (): JSX.Element => {
  const { profile_id, room_id } = useRoomContext();

  useSubscribeToMessages({ roomId: room_id });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId: room_id });

  const { mutate: insertMessage } = useInsertMessage();

  return (
    <>
      <ChatView messages={pages?.pages.flat()} onLoadMore={fetchNextPage} />
      <ChatInput
        onSubmit={({ url }) =>
          insertMessage({
            profile_id,
            room_id,
            data: { kind: "message#0.0.1", url },
          })
        }
      />
    </>
  );
};

export default ChatRoom;
