import { Controls, Message } from '@music-room/data-access';
import { FormError } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement, RefObject } from 'react';
import YouTube from 'react-youtube';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';
import { PlayerControls } from './PlayerControls/PlayerControls';

type Props = {
  ytRef: RefObject<YouTube>;
  profileId: number;
  message: Message;
  controls: Controls;
  error: PostgrestError | null;
  onEnd: () => void;
  onChange: (controls: Partial<Controls>) => void;
};

export const VideoPlayerView = ({
  ytRef,
  profileId,
  message,
  controls,
  error,
  onEnd,
  onChange,
}: Props): ReactElement => {
  const { muted, pause, volume, speaker_id } = controls;

  const isSpeaker = profileId === speaker_id;
  const player = ytRef.current?.getInternalPlayer();

  // useEffect(() => {
  //   const player = ref.current?.getInternalPlayer();
  //   if (!player || !isSpeaker) return;
  //   player.setVolume(volume);
  // }, [isSpeaker, volume]);

  // useEffect(() => {
  //   const player = ref.current?.getInternalPlayer();
  //   if (!player || !isSpeaker) return;
  //   if (muted) player.mute();
  //   else player.unMute();
  // }, [isSpeaker, muted]);

  // useEffect(() => {
  //   const player = ref.current?.getInternalPlayer();
  //   if (!player) return;
  //   if (pause) player.pauseVideo();
  //   else player.playVideo();
  // }, [pause]);

  const handlePause = () => {
    onChange({ pause: true });
  };

  const handlePlay = () => {
    onChange({ pause: false });
  };

  const handleEnd = () => {
    onEnd();
  };

  const handleAssignClick = () => {
    if (!player) return;
    onChange({ speaker_id: profileId });
  };

  const handleMuteChange = () => {
    if (!player) return;
    if (!muted) player.mute();
    else player.unMute();
    onChange({ muted: !muted });
  };

  const handlePauseChange = () => {
    if (!player) return;
    if (!pause) player.pauseVideo();
    else player.playVideo();
    onChange({ pause: !pause });
  };

  const handleVolumeChange = (volume: number) => {
    if (!player) return;
    player.setVolume(volume);
    onChange({ volume });
  };

  const errorMessage = useErrorMessage({ error });

  return (
    <>
      <YouTube
        ref={ytRef}
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
        onPause={handlePause}
        onPlay={handlePlay}
        onEnd={handleEnd}
      />
      <PlayerControls
        controls={controls}
        onAssignClick={handleAssignClick}
        onMuteChange={handleMuteChange}
        onPauseChange={handlePauseChange}
        onVolumeChange={handleVolumeChange}
      />
      {error && <FormError role="alert">{errorMessage}</FormError>}
    </>
  );
};
