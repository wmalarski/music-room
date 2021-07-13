export type RoomNavigationBarProps = {
  onSettingsClicked: () => void;
  onRoomClicked: () => void;
};

const RoomNavigationBar = ({
  onRoomClicked,
  onSettingsClicked,
}: RoomNavigationBarProps): JSX.Element => (
  <>
    <button onClick={onRoomClicked}>Room</button>
    <button onClick={onSettingsClicked}>Settings</button>
  </>
);

export default RoomNavigationBar;
