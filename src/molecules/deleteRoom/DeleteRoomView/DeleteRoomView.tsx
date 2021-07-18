import React, { useState } from "react";
import { Button } from "../../../atoms";
import RoleGuard from "../../../utils/room/RoleGuard";
import useText from "../../../utils/translations/useText";

export type DeleteRoomViewProps = {
  onClicked: () => void;
};

const DeleteRoomView = ({ onClicked }: DeleteRoomViewProps): JSX.Element => {
  const text = useText();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <RoleGuard visibleFor={["mod", "owner"]}>
      <Button onClick={() => setIsClicked(true)}>{text("removeRoom")}</Button>
      {isClicked && (
        <Button onClick={onClicked}>{text("confirmRemoveRoom")}</Button>
      )}
    </RoleGuard>
  );
};

export default DeleteRoomView;
