import React, { useState } from "react";
import { Button } from "../../../atoms";
import { RoomRole } from "../../../services/data/types";
import RoleGuard from "../../../utils/room/RoleGuard";
import useText from "../../../utils/translations/useText";

export type DeleteRoomViewProps = {
  role: RoomRole;
  onClicked: () => void;
};

const DeleteRoomView = ({
  role,
  onClicked,
}: DeleteRoomViewProps): JSX.Element => {
  const text = useText();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <RoleGuard role={role} visibleFor={["mod", "owner"]}>
      <Button onClick={() => setIsClicked(true)}>{text("removeRoom")}</Button>
      {isClicked && (
        <Button onClick={onClicked}>{text("confirmRemoveRoom")}</Button>
      )}
    </RoleGuard>
  );
};

export default DeleteRoomView;
