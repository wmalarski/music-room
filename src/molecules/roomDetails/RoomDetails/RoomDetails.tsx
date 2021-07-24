import React from "react";
import { useUpdateRoom } from "../../../services/data/rooms/updateRoom";
import { useMemberContext } from "../../../utils/room/MemberContext";
import RoomDetailsView, {
  RoomDetailsViewProps,
} from "../RoomDetailsView/RoomDetailsView";

export type RoomDetailsProps = {
  View?: React.ComponentType<RoomDetailsViewProps>;
};

const RoomDetails = ({
  View = RoomDetailsView,
}: RoomDetailsProps): JSX.Element | null => {
  const { room_id, room_name } = useMemberContext();

  const { mutate: updateRoom } = useUpdateRoom();

  return (
    <View
      roomName={room_name}
      onSubmit={({ name }) =>
        updateRoom({
          id: room_id,
          name,
        })
      }
    />
  );
};

export default RoomDetails;
