import React from "react";
import { useSelectControls } from "../../../services/data/controls/selectControls";
import { useSubscribeToControls } from "../../../services/data/controls/subscribeToControls";
import { useUpdateControls } from "../../../services/data/controls/updateControls";
import { useRoomContext } from "../../../utils/room/RoomContext";
import PlayerControlsView from "../PlayerControlsView/PlayerControlsView";

const PlayerControls = (): JSX.Element => {
  const { room_id, profile_id } = useRoomContext();

  const { data: controls } = useSelectControls({ roomId: room_id });
  const { mutate: updateControls } = useUpdateControls();
  useSubscribeToControls({ roomId: room_id });

  return (
    <>
      {controls && (
        <PlayerControlsView
          controls={controls}
          profileId={profile_id}
          onChange={updateControls}
        />
      )}
    </>
  );
};

export default PlayerControls;
