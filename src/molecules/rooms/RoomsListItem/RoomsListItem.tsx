import { Room } from "../../../services/data/types";

export type RoomsListItemProps = {
  room: Room;
  onClick: (room: Room) => void;
};

const RoomsListItem = ({ room, onClick }: RoomsListItemProps): JSX.Element => {
  return (
    <>
      <pre>{JSON.stringify(room, null, 2)}</pre>
      <button onClick={() => onClick(room)}>{`Go to ${room.name}`}</button>
    </>
  );
};

export default RoomsListItem;
