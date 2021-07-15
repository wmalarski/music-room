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
      <button onClick={onHomeClicked}>{text("navigationHome")}</button>
      {right}
    </div>
  );
};

export default NavigationBar;
