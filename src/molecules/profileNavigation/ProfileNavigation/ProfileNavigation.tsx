import { useRouter } from "next/router";
import React from "react";
import ProfileNavigationBar from "../ProfileNavigationBar/ProfileNavigationBar";

const ProfileNavigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <ProfileNavigationBar onProfileClicked={() => router.push(`/profile`)} />
  );
};

export default ProfileNavigation;
