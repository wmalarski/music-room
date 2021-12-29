import { ReactElement } from 'react';
import { useRoom } from '../../utils/contexts/RoomContext';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { ChatInput } from './ChatInput/ChatInput';
import { ChatRoom } from './ChatRoom/ChatRoom';
import { InviteLink } from './InviteLink/InviteLink';
import { Reactions } from './Reactions/Reactions';
import { VideoPlayer } from './VideoPlayer/VideoPlayer';

export const Room = (): ReactElement => {
  const { name } = useRoom();

  return (
    <Layout header={<RoomHeader />} appTitle={name}>
      <VideoPlayer />
      <ChatRoom />
      <InviteLink />
      <ChatInput />
      <Reactions />
    </Layout>
  );
};
