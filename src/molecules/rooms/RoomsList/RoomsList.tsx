import React from "react";
import { RoomProfile } from "../../../services/data/types";
import RoomsListItem from "../RoomsListItem/RoomsListItem";

export type RoomsListProps = {
  rooms?: RoomProfile[];
  onRoomClick: (room: RoomProfile) => void;
};

const RoomsList = ({ rooms, onRoomClick }: RoomsListProps): JSX.Element => (
  <>
    {rooms?.map((room) => (
      <RoomsListItem key={room.room_id} room={room} onClick={onRoomClick} />
    ))}
  </>
);

export default RoomsList;
