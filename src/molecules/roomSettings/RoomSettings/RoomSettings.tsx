import React from "react";
import { useUpdateRoom } from "../../../services/data/rooms/updateRoom";
import { useMemberContext } from "../../../utils/room/RoomContext";
import useRoleGuard from "../../../utils/room/useRoleGuard";
import RoomSettingsCard from "../RoomSettingsCard/RoomSettingsCard";
import RoomSettingsForm from "../RoomSettingsForm/RoomSettingsForm";

const RoomSettings = (): JSX.Element | null => {
  const { room_id, room_name } = useMemberContext();

  const { mutate: updateRoom } = useUpdateRoom();

  return (
    useRoleGuard({
      owner: (
        <RoomSettingsForm
          roomName={room_name}
          onSubmit={({ name }) =>
            updateRoom({
              id: room_id,
              name,
            })
          }
        />
      ),
      default: <RoomSettingsCard roomName={room_name} />,
    }) ?? null
  );
};

export default RoomSettings;
