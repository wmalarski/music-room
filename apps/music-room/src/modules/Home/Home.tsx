import { User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { SignOut } from '../SignOut/SignOut';
import { CreateRoom } from './CreateRoom/CreateRoom';
import { Rooms } from './Rooms/Rooms';

type Props = {
  user: User;
};

export const Home = ({ user }: Props): ReactElement => (
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
    <CreateRoom user={user} />
    <Rooms user={user} />
  </Layout>
);
