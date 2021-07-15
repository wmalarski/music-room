import { RoomProfile } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type RoomsListItemProps = {
  room: RoomProfile;
  onClick: (room: RoomProfile) => void;
};

const RoomsListItem = ({ room, onClick }: RoomsListItemProps): JSX.Element => {
  const text = useText();

  return (
    <>
      <pre>{JSON.stringify(room, null, 2)}</pre>
      <button onClick={() => onClick(room)}>
        {text("roomLink")(room.room_name)}
      </button>
    </>
  );
};

export default RoomsListItem;
