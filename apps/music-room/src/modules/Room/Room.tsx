import { ReactElement } from 'react';
import { useRoom } from '../../utils/contexts/RoomContext';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { Chat } from './Chat/Chat';
import { Player } from './Player/Player';
import { Reactions } from './Reactions/Reactions';

export const Room = (): ReactElement => {
  const { name } = useRoom();

  return (
    <Layout header={<RoomHeader />} appTitle={name}>
      <Player />
      <Chat />
      <Reactions />
    </Layout>
  );
};
