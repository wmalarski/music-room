import { useRouter } from "next/router";
import React from "react";
import ProfileNavigationView from "../ProfileNavigationView/ProfileNavigationView";

const ProfileNavigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <ProfileNavigationView onProfileClicked={() => router.push(`/profile`)} />
  );
};

export default ProfileNavigation;
