import { Controls, UpdateControlsArgs } from '@music-room/data-access';
import { Button, Input, Typography } from '@music-room/ui';
import { ChangeEvent, ReactElement } from 'react';
import { useText } from '../../../../../utils';

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

  const handleMuteChange = () => {
    onChange({ id, muted: !muted });
  };

  const handlePauseChange = () => {
    onChange({ id, pause: !pause });
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ id, volume: Number(event.target.value) });
  };

  const handleAssignClick = () => {
    onChange({ id, speaker_id: profileId });
  };

  return (
    <div>
      <div>
        <Input type="checkbox" checked={muted} onChange={handleMuteChange} />
        <Typography>{text('controlsMute')}</Typography>
      </div>
      <div>
        <Input type="checkbox" checked={pause} onChange={handlePauseChange} />
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
          onChange={handleVolumeChange}
        />
        <Typography>{text('controlsVolume')}</Typography>
      </div>
      <Button onClick={handleAssignClick}>
        {text('controlsAssignSpeaker')}
      </Button>
    </div>
  );
};
