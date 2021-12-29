import { GetServerSideProps } from 'next';
import { Settings } from '../../../modules/Settings/Settings';
import { Member } from '../../../services/data/types';
import { supabase } from '../../../services/supabase';
import getServerSideMembers from '../../../services/utils/getServerSideMembers';
import { MemberContextProvider } from '../../../utils/room/MemberContext';

export type RoomSettingsProps = {
  member: Member;
};

const RoomSettingsPage = ({ member }: RoomSettingsProps): JSX.Element => (
  <MemberContextProvider member={member}>
    <Settings member={member} />
  </MemberContextProvider>
);

export const getServerSideProps: GetServerSideProps<
  RoomSettingsProps
> = async ({ params: { slug } = {}, req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const member = await getServerSideMembers({ user, slug });
  return member ? { props: { member } } : { notFound: true };
};

export default RoomSettingsPage;
