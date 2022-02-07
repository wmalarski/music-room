import { useRoom } from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement } from 'react';
import { RoomHeader } from '../Headers/RoomHeader/RoomHeader';
import { Layout } from '../Layout/Layout';
import { ChatRoom } from './ChatRoom/ChatRoom';
import { InviteLink } from './InviteLink/InviteLink';
import { Reactions } from './Reactions/Reactions';

export const Room = (): ReactElement => {
  const { name } = useRoom();

  return (
    <Layout header={<RoomHeader />} appTitle={name}>
      <Flex justifyContent="center" gap="lg" space="lg">
        <Flex direction="column" gap="lg">
          {/* <VideoPlayer /> */}
          <InviteLink />
          <Reactions />
        </Flex>
        <ChatRoom />
      </Flex>
    </Layout>
  );
};
