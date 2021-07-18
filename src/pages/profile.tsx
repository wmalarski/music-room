import { GetServerSideProps } from "next";
import React from "react";
import { ProfileDetails } from "../molecules";
import { UserHeader } from "../organisms";
import { selectProfile } from "../services/data/profiles/selectProfile";
import { Profile } from "../services/data/types";
import { supabase } from "../services/supabase";
import ProfileTemplate from "../templates/ProfileTemplate/ProfileTemplate";
import { useUserContext } from "../utils/auth/UserContext";

export type ProfilePageProps = {
  profile: Profile;
};

const ProfilePage = ({ profile }: ProfilePageProps): JSX.Element => {
  const { user } = useUserContext();

  return (
    <ProfileTemplate
      header={<UserHeader user={user} />}
      center={<ProfileDetails profile={profile} />}
    />
  );
};

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async ({
  req,
}) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  const profile = await selectProfile({
    queryKey: ["profile", { userId: user.id }],
  });

  return profile ? { props: { profile } } : { notFound: true };
};

export default ProfilePage;
