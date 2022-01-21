import { ReactElement } from 'react';
import { ProfileHeader } from '../Headers/ProfileHeader/ProfileHeader';
import { Layout } from '../Layout/Layout';
import { CreateRoom } from './CreateRoom/CreateRoom';
import * as Styles from './Home.styles';
import { Rooms } from './Rooms/Rooms';

export const Home = (): ReactElement => (
  <Layout header={<ProfileHeader />}>
    <Styles.Container>
      <Rooms />
      <CreateRoom />
    </Styles.Container>
  </Layout>
);
