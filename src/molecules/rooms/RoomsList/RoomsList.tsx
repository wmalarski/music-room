import React from "react";
import { RoomRoles } from "../../../services/data/types";
import RoomsListItem from "../RoomsListItem/RoomsListItem";

export type RoomsListProps = {
  rooms?: RoomRoles[];
  onRoomClick: (room: RoomRoles) => void;
};

const RoomsList = ({ rooms, onRoomClick }: RoomsListProps): JSX.Element => {
  return (
    <>
      {rooms?.map((room) => (
        <RoomsListItem key={room.room_id} room={room} onClick={onRoomClick} />
      ))}
    </>
  );
};

export default RoomsList;
