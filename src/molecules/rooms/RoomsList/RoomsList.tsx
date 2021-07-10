import React from "react";
import { Room } from "../../../services/data/types";
import RoomsListItem from "../RoomsListItem/RoomsListItem";

export type RoomsListProps = {
  rooms?: Room[];
  onRoomClick: (room: Room) => void;
};

const RoomsList = ({ rooms, onRoomClick }: RoomsListProps): JSX.Element => {
  return (
    <>
      {rooms?.map((room) => (
        <RoomsListItem key={room.id} room={room} onClick={onRoomClick} />
      ))}
    </>
  );
};

export default RoomsList;
