import {
  Controls,
  useRole,
  useSelectControls,
  useSelectCurrentMessage,
  useSubscribeToControls,
  useUpdateControls,
  useUpdateMessage,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { VideoPlayerView } from './VideoPlayerView/VideoPlayerView';

type Props = {
  View?: typeof VideoPlayerView;
};

export const VideoPlayer = ({
  View = VideoPlayerView,
}: Props): ReactElement => {
  const { room_id, profile_id } = useRole();

  const { data: currentMessage } = useSelectCurrentMessage({ roomId: room_id });
  const { mutate: updateMessage } = useUpdateMessage(room_id);

  const { data: controls } = useSelectControls({ roomId: room_id });
  const { mutate: updateControls } = useUpdateControls(room_id);

  useSubscribeToControls({ roomId: room_id });

  const handleEnd = () => {
    if (!currentMessage) return;
    updateMessage({
      id: currentMessage.id,
      ended_at: new Date().toISOString(),
    });
  };

  const handleChange = (data: Partial<Controls>) => {
    if (!controls) return;
    updateControls({ id: controls.id, ...data });
  };

  return (
    <>
      {currentMessage && controls && (
        <View
          profileId={profile_id}
          controls={controls}
          message={{
            ...currentMessage,
            data: { kind: 'message#0.0.1', url: 'dQw4w9WgXcQ' },
          }}
          onEnd={handleEnd}
          onChange={handleChange}
        />
      )}
    </>
  );
};
