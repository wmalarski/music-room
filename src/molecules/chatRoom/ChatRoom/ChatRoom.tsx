import { useInsertMessage } from "../../../services/data/messages/insertMessage";
import { useSelectMessages } from "../../../services/data/messages/selectMessages";
import { useSubscribeToMessages } from "../../../services/data/messages/subscribeToMessages";
import ChatInput from "../ChatInput/ChatInput";
import ChatView from "../ChatView/ChatView";

export type ChatRoomProps = {
  profileId: number;
  roomId: number;
};

const ChatRoom = ({ profileId, roomId }: ChatRoomProps): JSX.Element => {
  useSubscribeToMessages({ roomId });

  const { data: pages, fetchNextPage } = useSelectMessages({ roomId });

  const { mutate: insertMessage } = useInsertMessage();

  return (
    <>
      <ChatView messages={pages?.pages.flat()} onLoadMore={fetchNextPage} />
      <ChatInput
        onSubmit={({ url }) =>
          insertMessage({
            profile_id: profileId,
            room_id: roomId,
            data: { kind: "message#0.0.1", url },
          })
        }
      />
    </>
  );
};

export default ChatRoom;
