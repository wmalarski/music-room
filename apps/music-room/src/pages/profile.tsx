import { GetServerSideProps } from 'next';
import { Profile } from '../modules/Profile/Profile';
import { selectProfile } from '../services/data/profiles/selectProfile';
import { Profile as ProfileType } from '../services/data/types';
import { supabase } from '../services/supabase';
import { useUserContext } from '../utils/auth/UserContext';

export type ProfilePageProps = {
  profile: ProfileType;
};

const ProfilePage = ({ profile }: ProfilePageProps): JSX.Element => {
  const { user } = useUserContext();

  return <Profile profile={profile} user={user} />;
};

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async ({
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const profile = await selectProfile({
    queryKey: ['profile', { userId: user.id }],
  });

  return profile ? { props: { profile } } : { notFound: true };
};

export default ProfilePage;
