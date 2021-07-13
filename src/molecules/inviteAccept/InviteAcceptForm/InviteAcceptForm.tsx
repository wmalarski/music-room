import { Room } from "../../../services/data/types";

export type InviteAcceptFormProps = {
  room: Room;
  onAcceptClicked: () => void;
};

const InviteAcceptForm = ({
  room,
  onAcceptClicked,
}: InviteAcceptFormProps): JSX.Element => (
  <div>
    <p>Invite to {room.name}</p>
    <button onClick={onAcceptClicked}>Accept</button>
  </div>
);

export default InviteAcceptForm;
