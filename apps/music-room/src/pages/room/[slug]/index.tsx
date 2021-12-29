import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { Room } from '../../../modules/Room/Room';
import { Member } from '../../../services/data/types';
import { supabase } from '../../../services/supabase';
import getServerSideMembers from '../../../services/utils/getServerSideMembers';
import { MemberContextProvider } from '../../../utils/contexts/MemberContext';

type Props = {
  member: Member;
};

const RoomPage = ({ member }: Props): ReactElement => (
  <MemberContextProvider member={member}>
    <Room />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params: { slug } = {},
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });
  return member ? { props: { member } } : { notFound: true };
};

export default RoomPage;
