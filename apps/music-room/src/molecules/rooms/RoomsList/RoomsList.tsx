import React from "react";
import { Member } from "../../../services/data/types";
import RoomsListItem from "../RoomsListItem/RoomsListItem";

export type RoomsListProps = {
  members?: Member[];
};

const RoomsList = ({ members }: RoomsListProps): JSX.Element => (
  <>
    {members?.map((member) => (
      <RoomsListItem key={member.room_id} member={member} />
    ))}
  </>
);

export default RoomsList;
