import { User } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { Profile as ProfileType } from '../../services/data/types';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';
import { ProfileNavigation } from '../ProfileNavigation/ProfileNavigation';
import { SignOut } from '../SignOut/SignOut';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type Props = {
  user?: User;
  profile: ProfileType;
};

export const Profile = ({ user, profile }: Props): ReactElement => (
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
    <ProfileDetails profile={profile} />
  </Layout>
);
