import { Button, Input, Typography } from '@music-room/ui';
import { ReactElement } from 'react';
import { UpdateControlsArgs } from '../../../../../../services/data/controls/updateControls';
import { Controls } from '../../../../../../services/data/types';
import useText from '../../../../../../utils/translations/useText';

type Props = {
  profileId: number;
  controls: Controls;
  onChange: (controls: UpdateControlsArgs) => void;
};

export const PlayerControls = ({
  profileId,
  controls: { id, muted, pause, volume },
  onChange,
}: Props): ReactElement => {
  const text = useText();

  return (
    <div>
      <div>
        <Input
          type="checkbox"
          checked={muted}
          onChange={() => onChange({ id, muted: !muted })}
        />
        <Typography>{text('controlsMute')}</Typography>
      </div>
      <div>
        <Input
          type="checkbox"
          checked={pause}
          onChange={() => onChange({ id, pause: !pause })}
        />
        <Typography>{text('controlsPause')}</Typography>
      </div>
      <div>
        <Input
          type="number"
          placeholder={text('controlsVolume')}
          step={1}
          min={0}
          max={100}
          value={volume}
          onChange={(event) =>
            onChange({ id, volume: Number(event.target.value) })
          }
        />
        <Typography>{text('controlsVolume')}</Typography>
      </div>
      <Button onClick={() => onChange({ id, speaker_id: profileId })}>
        {text('controlsAssignSpeaker')}
      </Button>
    </div>
  );
};
