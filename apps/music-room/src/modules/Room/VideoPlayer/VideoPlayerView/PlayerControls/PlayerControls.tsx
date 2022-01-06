import { Controls, UpdateControlsArgs } from '@music-room/data-access';
import { Button, Input, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement } from 'react';

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
  const { t } = useTranslation('room');

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
        <Typography>{t('controlsMute')}</Typography>
      </div>
      <div>
        <Input type="checkbox" checked={pause} onChange={handlePauseChange} />
        <Typography>{t('controlsPause')}</Typography>
      </div>
      <div>
        <Input
          type="number"
          placeholder={t('controlsVolume')}
          step={1}
          min={0}
          max={100}
          value={volume}
          onChange={handleVolumeChange}
        />
        <Typography>{t('controlsVolume')}</Typography>
      </div>
      <Button onClick={handleAssignClick}>{t('controlsAssignSpeaker')}</Button>
    </div>
  );
};
