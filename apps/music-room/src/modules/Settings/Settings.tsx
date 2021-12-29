import { ReactElement } from 'react';
import { Member } from '../../services/data/types';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { RoomNavigation } from '../RoomNavigation/RoomNavigation';
import { SignOut } from '../SignOut/SignOut';
import { RoomSettings } from './RoomSettings/RoomSettings';

type Props = {
  member: Member;
};

export const Settings = ({ member }: Props): ReactElement => (
  <Layout
    appTitle={member.room_name}
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
  >
    <RoomSettings />
  </Layout>
);
