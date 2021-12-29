import { ReactElement } from 'react';
import { Profile as ProfileType } from '../../services/data/types';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { ProfileDetails } from './ProfileDetails/ProfileDetails';

type Props = {
  profile: ProfileType;
};

export const Profile = ({ profile }: Props): ReactElement => (
  <Layout header={<ProfileHeader />}>
    <ProfileDetails profile={profile} />
  </Layout>
);
