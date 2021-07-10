import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useUpdateControls } from "../../../services/data/controls/updateControls";
import { useSelectCurrentMessage } from "../../../services/data/messages/selectCurrentMessage";
import PlayerControls from "../PlayerControls/PlayerControls";
import PlayerView from "../PlayerView/PlayerView";

export type PlayerProps = {
  profileId: number;
  roomId: number;
};

const Player = ({ roomId, profileId }: PlayerProps): JSX.Element => {
  const { data: controls } = useSelectControls({ roomId });

  const { data: currentMessage } = useSelectCurrentMessage({ roomId });

  const { mutate: updateControls } = useUpdateControls();

  useSubscribeToControls({ roomId });

  return (
    <>
      {controls && (
        <PlayerControls
          controls={controls}
          profileId={profileId}
          onChange={updateControls}
        />
      )}
      {currentMessage && <PlayerView message={currentMessage} />}
    </>
  );
};

export default Player;
