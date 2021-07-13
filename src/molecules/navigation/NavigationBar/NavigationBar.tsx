export type NavigationBarProps = {
  right?: React.ReactNode;
  onHomeClicked: () => void;
};

const NavigationBar = ({
  right,
  onHomeClicked,
}: NavigationBarProps): JSX.Element => (
  <div>
    <button onClick={onHomeClicked}>Home</button>
    {right}
  </div>
);

export default NavigationBar;
