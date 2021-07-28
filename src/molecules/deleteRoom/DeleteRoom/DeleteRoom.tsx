import { useRouter } from "next/router";
import React from "react";
import { useDeleteRoom } from "../../../services/data/rooms/deleteRoom";
import { useMemberContext } from "../../../utils/room/MemberContext";
import DeleteRoomView, {
  DeleteRoomViewProps,
} from "../DeleteRoomView/DeleteRoomView";

export type DeleteRoomProps = {
  View?: React.ComponentType<DeleteRoomViewProps>;
};

const DeleteRoom = ({
  View = DeleteRoomView,
}: DeleteRoomProps): JSX.Element => {
  const router = useRouter();

  const { room_id, role } = useMemberContext();

  const { mutate: deleteRoom } = useDeleteRoom({
    onSuccess: () => router.push("/"),
  });

  return (
    <View
      role={role}
      onClicked={() =>
        deleteRoom({
          id: room_id,
        })
      }
    />
  );
};

export default DeleteRoom;
