import React from "react";
import useText from "../../../utils/translations/useText";

export type SignOutFormProps = {
  onSignOutClicked: () => void;
};

const SignOutForm = ({ onSignOutClicked }: SignOutFormProps): JSX.Element => {
  const text = useText();

  return <button onClick={onSignOutClicked}>{text("signOutButton")}</button>;
};

export default SignOutForm;
