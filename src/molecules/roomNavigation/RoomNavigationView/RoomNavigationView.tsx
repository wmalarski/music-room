import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type RoomNavigationViewProps = {
  onSettingsClicked: () => void;
  onRoomClicked: () => void;
};

const RoomNavigationView = ({
  onRoomClicked,
  onSettingsClicked,
}: RoomNavigationViewProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <Button onClick={onRoomClicked}>{text("navigationRoom")}</Button>
      <Button onClick={onSettingsClicked}>{text("navigationSettings")}</Button>
    </>
  );
};

export default RoomNavigationView;
