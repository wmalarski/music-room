import {
  Controls,
  useRole,
  useSelectControls,
  useSelectCurrentMessage,
  useSubscribeToControls,
  useUpdateControls,
  useUpdateMessage,
} from '@music-room/data-access';
import { ReactElement, useRef } from 'react';
import YouTube from 'react-youtube';
import { VideoPlayerView } from './VideoPlayerView/VideoPlayerView';

type Props = {
  View?: typeof VideoPlayerView;
};

export const VideoPlayer = ({
  View = VideoPlayerView,
}: Props): ReactElement => {
  const { room_id, profile_id } = useRole();

  const ytRef = useRef<YouTube>(null);

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });

  const { mutate: updateMessage, error: messageError } =
    useUpdateMessage(room_id);

  const { data: controls } = useSelectControls(
    { roomId: room_id },
    {
      onSuccess: (data) => {
        const player = ytRef.current?.getInternalPlayer();
        if (!data || !player) return;

        if (data.muted && !player.mute) player.mute();
        else if (player.mute) player.unMute();

        if (data.pause) player.pauseVideo();
        else player.playVideo();

        if (profile_id !== data.change_by) player.mute();
      },
    }
  );
  const { mutate: updateControls, error: updateError } =
    useUpdateControls(room_id);

  useSubscribeToControls({ roomId: room_id, profileId: profile_id });

  const handleEnd = () => {
    if (!currentMessage) return;
    updateMessage({
      id: currentMessage.id,
      ended_at: new Date().toISOString(),
    });
  };

  const handleChange = (data: Partial<Controls>) => {
    if (!controls) return;
    updateControls({ id: controls.id, change_by: profile_id, ...data });
  };

  return (
    <>
      {currentMessage && controls && (
        <View
          ytRef={ytRef}
          profileId={profile_id}
          controls={controls}
          error={messageError ?? updateError}
          message={{
            ...currentMessage,
            data: { kind: 'message#0.0.1', url: 'dQw4w9WgXcQ' },
          }}
          onEnd={handleEnd}
          onChange={() => void 0}
        />
      )}
    </>
  );
};
