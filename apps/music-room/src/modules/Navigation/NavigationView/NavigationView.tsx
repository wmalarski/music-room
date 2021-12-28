import React from "react";
import { Link } from "../../../atoms";
import paths from "../../../utils/routing/paths";
import useText from "../../../utils/translations/useText";

export type NavigationViewProps = {
  right?: React.ReactNode;
};

const NavigationView = ({ right }: NavigationViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Link href={paths.home}>{text("navigationHome")}</Link>
      {right}
    </div>
  );
};

export default NavigationView;
