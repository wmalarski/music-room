import React from "react";
import { Button, Typography } from "../../../atoms";
import { Room } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type InviteAcceptViewProps = {
  room: Room;
  isLoading: boolean;
  onAcceptClicked: () => void;
};

const InviteAcceptView = ({
  room,
  isLoading,
  onAcceptClicked,
}: InviteAcceptViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Typography>{text("inviteToRoom")(room.name)}</Typography>
      <Button isLoading={isLoading} onClick={onAcceptClicked}>
        {text("acceptInvitation")}
      </Button>
    </div>
  );
};

export default InviteAcceptView;
