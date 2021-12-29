import { ReactElement, useEffect, useRef } from 'react';
import YouTube from 'react-youtube';
import { Controls, Message } from '../../../../services/data/types';
import { PlayerControls } from './PlayerControls/PlayerControls';

type Props = {
  profileId: number;
  message: Message;
  controls: Controls;
  onEnd: () => void;
  onChange: (controls: Partial<Controls>) => void;
};

export const VideoPlayerView = ({
  profileId,
  message,
  controls,
  onEnd,
  onChange,
}: Props): ReactElement => {
  const { muted, pause, volume, speaker_id } = controls;

  const ref = useRef<YouTube>(null);

  const isSpeaker = profileId === speaker_id;

  useEffect(() => {
    const player = ref.current?.getInternalPlayer();
    if (!player || !isSpeaker) return;
    player.setVolume(volume);
  }, [isSpeaker, volume]);

  useEffect(() => {
    const player = ref.current?.getInternalPlayer();
    if (!player || !isSpeaker) return;
    if (muted) player.mute();
    else player.unMute();
  }, [isSpeaker, muted]);

  useEffect(() => {
    const player = ref.current?.getInternalPlayer();
    if (!player) return;
    if (pause) player.pauseVideo();
    else player.playVideo();
  }, [pause]);

  return (
    <>
      <YouTube
        ref={ref}
        videoId={message.data.url}
        opts={{
          height: '390',
          width: '640',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
          },
        }}
        onPause={() => onChange({ pause: true })}
        onPlay={() => onChange({ pause: false })}
        onEnd={() => onEnd()}
      />
      <PlayerControls
        controls={controls}
        onChange={onChange}
        profileId={profileId}
      />
    </>
  );
};
