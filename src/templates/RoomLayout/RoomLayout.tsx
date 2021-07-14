import Layout from "../Layout/Layout";

export type RoomLayoutProps = {
  appTitle: string;
  header: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
};

const RoomLayout = ({
  appTitle,
  bottom,
  header,
  left,
  right,
}: RoomLayoutProps): JSX.Element => (
  <Layout header={header} appTitle={appTitle}>
    {left}
    {right}
    {bottom}
  </Layout>
);

export default RoomLayout;
