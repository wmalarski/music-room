import { UpdateMessageArgs } from "../../../services/data/messages/updateMessage";
import { Message } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type PlayerViewProps = {
  message: Message;
  onMessageEnd: (update: UpdateMessageArgs) => void;
};

const PlayerView = ({
  message,
  onMessageEnd,
}: PlayerViewProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <h2>{message.data.url}</h2>
      <button
        onClick={() =>
          onMessageEnd({ id: message.id, ended_at: new Date().toISOString() })
        }
      >
        {text("endMessage")}
      </button>
    </>
  );
};

export default PlayerView;
