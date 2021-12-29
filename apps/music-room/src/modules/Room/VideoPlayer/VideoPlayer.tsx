import {
  useSelectControls,
  useSelectCurrentMessage,
  useSubscribeToControls,
  useUpdateControls,
  useUpdateMessage,
} from '@music-room/data-access';
import { ReactElement } from 'react';
import { useRole } from '../../../utils/contexts/RoleContext';
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
          onEnd={() =>
            updateMessage({
              id: currentMessage.id,
              ended_at: new Date().toISOString(),
            })
          }
          onChange={(data) => updateControls({ id: controls.id, ...data })}
        />
      )}
    </>
  );
};
