import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type NavigationViewProps = {
  right?: React.ReactNode;
  onHomeClicked: () => void;
};

const NavigationView = ({
  right,
  onHomeClicked,
}: NavigationViewProps): JSX.Element => {
  const text = useText();
  return (
    <div>
      <Button onClick={onHomeClicked}>{text("navigationHome")}</Button>
      {right}
    </div>
  );
};

export default NavigationView;
