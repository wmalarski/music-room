import { ReactElement } from 'react';
import { Member } from '../../services/data/types';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import RoomNavigation from '../RoomNavigation/RoomNavigation';
import SignOut from '../SignOut/SignOut';
import { Chat } from './Chat/Chat';
import { Player } from './Player/Player';
import { Reactions } from './Reactions/Reactions';

type Props = {
  member: Member;
};

export const Room = ({ member }: Props): ReactElement => (
  <Layout
    header={
      <Navigation
        right={
          <>
            <RoomNavigation />
            <ProfileNavigation />
            <SignOut />
          </>
        }
      />
    }
    appTitle={member.room_name}
  >
    <Player />
    <Chat />
    <Reactions />
  </Layout>
);
