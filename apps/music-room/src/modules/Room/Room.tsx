import { ReactElement } from 'react';
import { Member } from '../../services/data/types';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { Chat } from './Chat/Chat';
import { Player } from './Player/Player';
import { Reactions } from './Reactions/Reactions';

type Props = {
  member: Member;
};

export const Room = ({ member }: Props): ReactElement => (
  <Layout header={<RoomHeader />} appTitle={member.room_name}>
    <Player />
    <Chat />
    <Reactions />
  </Layout>
);
