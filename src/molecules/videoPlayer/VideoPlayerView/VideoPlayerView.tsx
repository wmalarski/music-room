import React from "react";
import { Button, Typography } from "../../../atoms";
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
      <Typography>{message.data.url}</Typography>
      <Button
        onClick={() =>
          onMessageEnd({ id: message.id, ended_at: new Date().toISOString() })
        }
      >
        {text("endMessage")}
      </Button>
    </>
  );
};

export default PlayerView;
