import React from "react";
import { Button, Debug } from "../../../atoms";
import { RoomProfile } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type RoomsListItemProps = {
  room: RoomProfile;
  onClick: (room: RoomProfile) => void;
};

const RoomsListItem = ({ room, onClick }: RoomsListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Debug value={room} />
      <Button onClick={() => onClick(room)}>
        {text("roomLink")(room.room_name)}
      </Button>
    </>
  );
};

export default RoomsListItem;
