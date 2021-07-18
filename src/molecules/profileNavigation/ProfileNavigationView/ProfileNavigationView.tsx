import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type ProfileNavigationViewProps = {
  onProfileClicked: () => void;
};

const ProfileNavigationView = ({
  onProfileClicked,
}: ProfileNavigationViewProps): JSX.Element => {
  const text = useText();

  return (
    <Button onClick={onProfileClicked}>{text("navigationProfile")}</Button>
  );
};

export default ProfileNavigationView;
