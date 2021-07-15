import { UpdateControlsArgs } from "../../../services/data/controls/updateControls";
import { Controls } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type PlayerControlsProps = {
  profileId: number;
  controls: Controls;
  onChange: (controls: UpdateControlsArgs) => void;
};

const PlayerControls = ({
  profileId,
  controls: { id, muted, pause, volume },
  onChange,
}: PlayerControlsProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={muted}
          onChange={() => onChange({ id, muted: !muted })}
        />
        {text("controlsMute")}
      </label>
      <label>
        <input
          type="checkbox"
          checked={pause}
          onChange={() => onChange({ id, pause: !pause })}
        />
        {text("controlsPause")}
      </label>
      <label>
        <input
          type="number"
          placeholder={text("controlsVolume")}
          step={0.1}
          min={0}
          max={1}
          value={volume}
          onChange={(event) =>
            onChange({ id, volume: Number(event.target.value) })
          }
        />
        {text("controlsVolume")}
      </label>
      <button onClick={() => onChange({ id, speaker_id: profileId })}>
        {text("controlsAssignSpeaker")}
      </button>
    </div>
  );
};

export default PlayerControls;
