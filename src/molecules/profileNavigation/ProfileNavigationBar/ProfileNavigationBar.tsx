import useText from "../../../utils/translations/useText";

export type ProfileNavigationBarProps = {
  onProfileClicked: () => void;
};

const ProfileNavigationBar = ({
  onProfileClicked,
}: ProfileNavigationBarProps): JSX.Element => {
  const text = useText();

  return (
    <button onClick={onProfileClicked}>{text("navigationProfile")}</button>
  );
};

export default ProfileNavigationBar;
