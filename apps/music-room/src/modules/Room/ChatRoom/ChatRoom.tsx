import {
  useRole,
  useSelectMessages,
  useSubscribeToMessages,
} from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';

type Props = {
  View?: typeof ChatMessagesList;
};

export const ChatRoom = ({ View = ChatMessagesList }: Props): ReactElement => {
  const { room_id: roomId, profile_id: profileId } = useRole();

  const [offset, setOffset] = useState(0);

  const { data } = useSelectMessages({ roomId, limit: 20, offset });

  useSubscribeToMessages({ roomId, limit: 20, offset, profileId });

  return <View data={data} offset={offset} onPageChange={setOffset} />;
};
