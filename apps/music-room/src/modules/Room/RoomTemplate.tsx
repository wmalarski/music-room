import Layout from '../../modules/Layout/Layout';
import { Reactions } from '../../molecules';
import Chat from './Chat/Chat';
import Player from './Player/Player';

export type RoomTemplateProps = {
  appTitle: string;
  header: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
};

const RoomTemplate = ({
  appTitle,
  bottom,
  header,
  left,
  right,
}: RoomTemplateProps): JSX.Element => (
  <Layout
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
    appTitle={member.room_name}
  >
    <Player />
    <Chat />
    <Reactions />
  </Layout>
);

export default RoomTemplate;
