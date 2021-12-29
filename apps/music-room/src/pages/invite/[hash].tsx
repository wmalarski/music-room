import { Room, selectRoomByHash } from '@music-room/data-access';
import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { Auth } from '../../modules/Auth/Auth';
import { Invite } from '../../modules/Invite/Invite';
import { useUserContext } from '../../utils/auth/UserContext';
import { RoomContextProvider } from '../../utils/contexts/RoomContext';

type Props = {
  room: Room;
};

const InvitePage = ({ room }: Props): ReactElement => {
  const user = useUserContext();

  return user ? (
    <RoomContextProvider room={room}>
      <Invite room={room} />
    </RoomContextProvider>
  ) : (
    <Auth />
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params: { hash } = {},
}) => {
  const roomHash = Array.isArray(hash) ? undefined : hash;
  if (!roomHash) return { notFound: true };

  const [room] = await selectRoomByHash({
    queryKey: ['roomByHash', { hash: roomHash }],
  });

  if (!room) return { notFound: true };

  return { props: { room } };
};

export default InvitePage;
