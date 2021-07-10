import { Controls } from "../../../services/data/types";

export type PlayerControlsProps = {
  controls: Controls;
};

const PlayerControls = ({ controls }: PlayerControlsProps): JSX.Element => {
  return <div>{JSON.stringify(controls, null, 2)}</div>;
};

export default PlayerControls;
