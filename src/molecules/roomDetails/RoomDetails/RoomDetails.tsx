import React from "react";
import { useUpdateRoom } from "../../../services/data/rooms/updateRoom";
import { useMemberContext } from "../../../utils/room/MemberContext";
import useRoleGuard from "../../../utils/room/useRoleGuard";
import RoomDetailsCard from "../RoomDetailsCard/RoomDetailsCard";
import RoomDetailsForm from "../RoomDetailsForm/RoomDetailsForm";

const RoomDetails = (): JSX.Element | null => {
  const { room_id, room_name } = useMemberContext();

  const { mutate: updateRoom } = useUpdateRoom();

  return (
    useRoleGuard({
      owner: (
        <RoomDetailsForm
          roomName={room_name}
          onSubmit={({ name }) =>
            updateRoom({
              id: room_id,
              name,
            })
          }
        />
      ),
      default: <RoomDetailsCard roomName={room_name} />,
    }) ?? null
  );
};

export default RoomDetails;
