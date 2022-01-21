import { Controls } from '@music-room/data-access';
import { Button, Input, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement } from 'react';

type Props = {
  controls: Controls;
  onMuteChange: () => void;
  onPauseChange: () => void;
  onVolumeChange: (volume: number) => void;
  onAssignClick: () => void;
};

export const PlayerControls = ({
  controls: { muted, pause, volume },
  onAssignClick,
  onMuteChange,
  onPauseChange,
  onVolumeChange,
}: Props): ReactElement => {
  const { t } = useTranslation('room');

  const handleMuteChange = () => {
    onMuteChange();
  };

  const handlePauseChange = () => {
    onPauseChange();
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onVolumeChange(Number(event.target.value));
  };

  const handleAssignClick = () => {
    onAssignClick();
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
