import { useRouter } from "next/router";
import React from "react";
import { useDeleteRoom } from "../../../services/data/rooms/deleteRoom";
import { useMemberContext } from "../../../utils/room/MemberContext";
import DeleteRoomView from "../DeleteRoomView/DeleteRoomView";

const DeleteRoom = (): JSX.Element => {
  const router = useRouter();

  const { room_id } = useMemberContext();

  const { mutate: deleteRoom } = useDeleteRoom({
    onSuccess: () => router.push("/"),
  });

  return (
    <DeleteRoomView
      onClicked={() =>
        deleteRoom({
          id: room_id,
        })
      }
    />
  );
};

export default DeleteRoom;
