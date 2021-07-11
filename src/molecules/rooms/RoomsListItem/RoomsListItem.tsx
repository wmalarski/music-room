import { RoomProfile } from "../../../services/data/types";

export type RoomsListItemProps = {
  room: RoomProfile;
  onClick: (room: RoomProfile) => void;
};

const RoomsListItem = ({ room, onClick }: RoomsListItemProps): JSX.Element => {
  return (
    <>
      <pre>{JSON.stringify(room, null, 2)}</pre>
      <button onClick={() => onClick(room)}>{`Go to ${room.room_name}`}</button>
    </>
  );
};

export default RoomsListItem;
