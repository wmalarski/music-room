import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type ProfileNavigationBarProps = {
  onProfileClicked: () => void;
};

const ProfileNavigationBar = ({
  onProfileClicked,
}: ProfileNavigationBarProps): JSX.Element => {
  const text = useText();

  return (
    <Button onClick={onProfileClicked}>{text("navigationProfile")}</Button>
  );
};

export default ProfileNavigationBar;
