import React from "react";
import { Member } from "../../../services/data/types";
import RoomsListItem from "../RoomsListItem/RoomsListItem";

export type RoomsListProps = {
  members?: Member[];
  onRoomClick: (room: Member) => void;
};

const RoomsList = ({ members, onRoomClick }: RoomsListProps): JSX.Element => (
  <>
    {members?.map((member) => (
      <RoomsListItem
        key={member.room_id}
        member={member}
        onClick={onRoomClick}
      />
    ))}
  </>
);

export default RoomsList;
