import { useRouter } from "next/router";
import React from "react";
import ProfileNavigationView, {
  ProfileNavigationViewProps,
} from "../ProfileNavigationView/ProfileNavigationView";

export type ProfileNavigationProps = {
  View?: React.ComponentType<ProfileNavigationViewProps>;
};

const ProfileNavigation = ({
  View = ProfileNavigationView,
}: ProfileNavigationProps): JSX.Element => {
  const router = useRouter();

  return <View onProfileClicked={() => router.push(`/profile`)} />;
};

export default ProfileNavigation;
