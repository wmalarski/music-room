import { UpdateMessageArgs } from "../../../services/data/messages/updateMessage";
import { Message } from "../../../services/data/types";

export type PlayerViewProps = {
  message: Message;
  onMessageEnd: (update: UpdateMessageArgs) => void;
};

const PlayerView = ({
  message,
  onMessageEnd,
}: PlayerViewProps): JSX.Element => (
  <>
    <h2>{message.data.url}</h2>
    <button
      onClick={() =>
        onMessageEnd({ id: message.id, ended_at: new Date().toISOString() })
      }
    >
      End Message
    </button>
  </>
);

export default PlayerView;
