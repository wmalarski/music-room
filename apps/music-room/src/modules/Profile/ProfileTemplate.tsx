import React from 'react';
import Layout from '../../modules/Layout/Layout';

export type ProfilePageProps = {
  header: React.ReactNode;
  center: React.ReactNode;
};

const ProfileTemplate = ({ header, center }: ProfilePageProps): JSX.Element => (
  <Layout header={<UserHeader user={user} />}>
    <ProfileDetails profile={profile} />
  </Layout>
);

export default ProfileTemplate;
