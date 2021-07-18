import React from "react";
import { Button, Input, Typography } from "../../../atoms";
import { UpdateControlsArgs } from "../../../services/data/controls/updateControls";
import { Controls } from "../../../services/data/types";
import useText from "../../../utils/translations/useText";

export type PlayerControlsViewProps = {
  profileId: number;
  controls: Controls;
  onChange: (controls: UpdateControlsArgs) => void;
};

const PlayerControlsView = ({
  profileId,
  controls: { id, muted, pause, volume },
  onChange,
}: PlayerControlsViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <div>
        <Input
          type="checkbox"
          checked={muted}
          onChange={() => onChange({ id, muted: !muted })}
        />
        <Typography>{text("controlsMute")}</Typography>
      </div>
      <div>
        <Input
          type="checkbox"
          checked={pause}
          onChange={() => onChange({ id, pause: !pause })}
        />
        <Typography>{text("controlsPause")}</Typography>
      </div>
      <div>
        <Input
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
        <Typography>{text("controlsVolume")}</Typography>
      </div>
      <Button onClick={() => onChange({ id, speaker_id: profileId })}>
        {text("controlsAssignSpeaker")}
      </Button>
    </div>
  );
};

export default PlayerControlsView;
