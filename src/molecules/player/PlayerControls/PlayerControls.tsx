import { UpdateControlsArgs } from "../../../services/data/controls/updateControls";
import { Controls } from "../../../services/data/types";

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
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={muted}
          onChange={() => onChange({ id, muted: !muted })}
        />
        Muted
      </label>
      <label>
        <input
          type="checkbox"
          checked={pause}
          onChange={() => onChange({ id, pause: !pause })}
        />
        Pause
      </label>
      <label>
        <input
          type="number"
          placeholder="Volume"
          step={0.1}
          min={0}
          max={1}
          value={volume}
          onChange={(event) =>
            onChange({ id, volume: Number(event.target.value) })
          }
        />
        Volume
      </label>
      <button onClick={() => onChange({ id, speaker_id: profileId })}>
        Assign speaker
      </button>
    </div>
  );
};

export default PlayerControls;
