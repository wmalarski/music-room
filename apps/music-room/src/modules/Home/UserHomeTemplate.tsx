import React from 'react';
import Layout from '../../modules/Layout/Layout';

export type UserHomeTemplateProps = {
  header: React.ReactNode;
  left?: React.ReactNode;
  center: React.ReactNode;
};

const UserHomeTemplate = ({
  center,
  left,
  header,
}: UserHomeTemplateProps): JSX.Element => (
  <Layout header={<UserHeader user={user} />}>
    <CreateRoom user={user} />
    <Rooms user={user} />
  </Layout>
);

export default UserHomeTemplate;
