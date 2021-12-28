import { User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { Profile, Room } from '../../services/data/types';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import SignOut from '../SignOut/SignOut';
import { InviteAccept } from './InviteAccept/InviteAccept';

type Props = {
  profile?: Profile;
  user: User;
  room: Room;
};

export const Invite = ({ profile, user, room }: Props): ReactElement => (
  <Layout
    header={
      <Navigation
        right={
          user && (
            <>
              <ProfileNavigation />
              <SignOut />
            </>
          )
        }
      />
    }
  >
    {profile && <InviteAccept room={room} profile={profile} />}
  </Layout>
);
