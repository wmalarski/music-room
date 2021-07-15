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
      <button onClick={onRoomClicked}>{text("navigationRoom")}</button>
      <button onClick={onSettingsClicked}>{text("navigationSettings")}</button>
    </>
  );
};

export default RoomNavigationBar;
