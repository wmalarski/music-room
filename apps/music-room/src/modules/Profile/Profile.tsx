import { ReactElement } from 'react';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

export const Profile = (): ReactElement => {
  return (
    <Layout header={<ProfileHeader />}>
      <ProfileDetails />
    </Layout>
  );
};
