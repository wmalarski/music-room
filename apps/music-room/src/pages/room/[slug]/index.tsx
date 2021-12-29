import { GetServerSideProps } from 'next';
import { Room } from '../../../modules/Room/RoomTemplate';
import { Member } from '../../../services/data/types';
import { supabase } from '../../../services/supabase';
import getServerSideMembers from '../../../services/utils/getServerSideMembers';
import { MemberContextProvider } from '../../../utils/room/MemberContext';

export type RoomPageProps = {
  member: Member;
};

const RoomPage = ({ member }: RoomPageProps): JSX.Element => (
  <MemberContextProvider member={member}>
    <Room member={member} />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<RoomPageProps> = async ({
  params: { slug } = {},
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });
  return member ? { props: { member } } : { notFound: true };
};

export default RoomPage;
