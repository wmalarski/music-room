import { useState } from "react";
import { useInsertMessage } from "../../../services/data/messages/insertMessage";
import { useRoomContext } from "../../../utils/room/RoomContext";
import ChatInputForm from "../ChatInputForm/ChatInputForm";

const ChatInput = (): JSX.Element => {
  const { profile_id, room_id } = useRoomContext();

  const { mutate: insertMessage } = useInsertMessage();

  const [query, setQuery] = useState("");
  // const { data: selections } = useSelectSuggestions({ query });

  // useEffect(() => console.log("selections", selections), [selections]);

  return (
    <ChatInputForm
      query={query}
      onQueryChange={setQuery}
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
