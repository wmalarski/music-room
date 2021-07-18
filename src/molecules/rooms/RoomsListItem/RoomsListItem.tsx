import React from "react";
import { Button, Debug } from "../../../atoms";
import { Member } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type RoomsListItemProps = {
  member: Member;
  onClick: (room: Member) => void;
};

const RoomsListItem = ({
  member,
  onClick,
}: RoomsListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Debug value={member} />
      <Button onClick={() => onClick(member)}>
        {text("roomLink")(member.room_name)}
      </Button>
    </>
  );
};

export default RoomsListItem;
