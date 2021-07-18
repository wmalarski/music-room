import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type NavigationBarProps = {
  right?: React.ReactNode;
  onHomeClicked: () => void;
};

const NavigationBar = ({
  right,
  onHomeClicked,
}: NavigationBarProps): JSX.Element => {
  const text = useText();
  return (
    <div>
      <Button onClick={onHomeClicked}>{text("navigationHome")}</Button>
      {right}
    </div>
  );
};

export default NavigationBar;
