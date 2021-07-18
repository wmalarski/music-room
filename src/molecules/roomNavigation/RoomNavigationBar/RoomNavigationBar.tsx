import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type RoomNavigationBarProps = {
  onSettingsClicked: () => void;
  onRoomClicked: () => void;
};

const RoomNavigationBar = ({
  onRoomClicked,
  onSettingsClicked,
}: RoomNavigationBarProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Button onClick={onRoomClicked}>{text("navigationRoom")}</Button>
      <Button onClick={onSettingsClicked}>{text("navigationSettings")}</Button>
    </>
  );
};

export default RoomNavigationBar;
