import { Message } from "../../../services/data/types";

export type PlayerViewProps = {
  message: Message;
};

const PlayerView = ({ message }: PlayerViewProps): JSX.Element => {
  return <div>{JSON.stringify(message, null, 2)}</div>;
};

export default PlayerView;
