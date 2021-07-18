import React from "react";
import { Button, Typography } from "../../../atoms";
import { Room } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type InviteAcceptViewProps = {
  room: Room;
  onAcceptClicked: () => void;
};

const InviteAcceptView = ({
  room,
  onAcceptClicked,
}: InviteAcceptViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Typography>{text("inviteToRoom")(room.name)}</Typography>
      <Button onClick={onAcceptClicked}>{text("acceptInvitation")}</Button>
    </div>
  );
};

export default InviteAcceptView;
