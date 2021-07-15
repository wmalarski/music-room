import { Room } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type InviteAcceptFormProps = {
  room: Room;
  onAcceptClicked: () => void;
};

const InviteAcceptForm = ({
  room,
  onAcceptClicked,
}: InviteAcceptFormProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <p>{text("inviteToRoom")(room.name)}</p>
      <button onClick={onAcceptClicked}>{text("acceptInvitation")}</button>
    </div>
  );
};

export default InviteAcceptForm;
