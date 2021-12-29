import { ReactElement } from 'react';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { CreateRoom } from './CreateRoom/CreateRoom';
import { Rooms } from './Rooms/Rooms';

export const Home = (): ReactElement => (
  <Layout header={<ProfileHeader />}>
    <CreateRoom />
    <Rooms />
  </Layout>
);
