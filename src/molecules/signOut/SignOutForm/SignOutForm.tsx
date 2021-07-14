import React from "react";

export type SignOutFormProps = {
  onSignOutClicked: () => void;
};

const SignOutForm = ({ onSignOutClicked }: SignOutFormProps): JSX.Element => (
  <button onClick={onSignOutClicked}>SignOut</button>
);

export default SignOutForm;
