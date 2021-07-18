import React from "react";
import { Button } from "../../../atoms";
import useText from "../../../utils/translations/useText";

export type SignOutFormProps = {
  onSignOutClicked: () => void;
};

const SignOutForm = ({ onSignOutClicked }: SignOutFormProps): JSX.Element => {
  const text = useText();

  return <Button onClick={onSignOutClicked}>{text("signOutButton")}</Button>;
};

export default SignOutForm;
