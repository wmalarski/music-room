import { GetServerSideProps } from 'next';
import { ReactElement } from 'react';
import { Profile } from '../modules/Profile/Profile';
import { selectProfile } from '../services/data/profiles/selectProfile';
import { Profile as ProfileType } from '../services/data/types';
import { supabase } from '../services/supabase';

type Props = {
  profile: ProfileType;
};

const ProfilePage = ({ profile }: Props): ReactElement => {
  return <Profile profile={profile} />;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
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
