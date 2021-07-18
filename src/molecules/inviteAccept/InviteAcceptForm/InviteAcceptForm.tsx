import React from "react";
import { Button, Typography } from "../../../atoms";
import { Room } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type InviteAcceptFormProps = {
  room: Room;
  onAcceptClicked: () => void;
};

const InviteAcceptForm = ({
  room,
  onAcceptClicked,
}: InviteAcceptFormProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Typography>{text("inviteToRoom")(room.name)}</Typography>
      <Button onClick={onAcceptClicked}>{text("acceptInvitation")}</Button>
    </div>
  );
};

export default InviteAcceptForm;
