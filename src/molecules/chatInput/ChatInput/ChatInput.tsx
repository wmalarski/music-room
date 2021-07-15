import { useInsertMessage } from "../../../services/data/messages/insertMessage";
import { useRoomContext } from "../../../utils/room/RoomContext";
import ChatInputForm from "../ChatInputForm/ChatInputForm";

const ChatInput = (): JSX.Element => {
  const { profile_id, room_id } = useRoomContext();

  const { mutate: insertMessage } = useInsertMessage();

  return (
    <ChatInputForm
      onSubmit={({ url }) =>
        insertMessage({
          profile_id,
          room_id,
          data: { kind: "message#0.0.1", url },
        })
      }
    />
  );
};

export default ChatInput;
