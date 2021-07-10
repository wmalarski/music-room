import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerView from "../PlayerView/PlayerView";

export type PlayerProps = {
  roomId: number;
};

const Player = ({ roomId }: PlayerProps): JSX.Element => {
  const { data: controls } = useSelectControls({ roomId });

  const { data: currentMessage } = useSelectCurrentMessage({ roomId });

  useSubscribeToControls({ roomId });

  console.log("currentMessage", currentMessage);

  return (
    <>
      {controls && <PlayerControls controls={controls} />}
      {currentMessage && <PlayerView message={currentMessage} />}
    </>
  );
};

export default Player;
