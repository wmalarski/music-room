import Layout from "../Layout/Layout";

export type RoomTemplateProps = {
  appTitle: string;
  header: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  bottom: React.ReactNode;
};

const RoomTemplate = ({
  appTitle,
  bottom,
  header,
  left,
  right,
}: RoomTemplateProps): JSX.Element => (
  <Layout header={header} appTitle={appTitle}>
    {left}
    {right}
    {bottom}
  </Layout>
);

export default RoomTemplate;
