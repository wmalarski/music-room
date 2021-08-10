import React from "react";
import { Link } from "../../../atoms";
import paths from "../../../utils/routing/paths";
import useText from "../../../utils/translations/useText";

const ProfileNavigationView = (): JSX.Element => {
  const text = useText();

  return <Link href={paths.profile}>{text("navigationProfile")}</Link>;
};

export default ProfileNavigationView;
