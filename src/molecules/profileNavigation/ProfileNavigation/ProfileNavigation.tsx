import React from "react";
import ProfileNavigationView from "../ProfileNavigationView/ProfileNavigationView";

export type ProfileNavigationProps = {
  View?: React.ComponentType;
};

const ProfileNavigation = ({
  View = ProfileNavigationView,
}: ProfileNavigationProps): JSX.Element => {
  return <View />;
};

export default ProfileNavigation;
