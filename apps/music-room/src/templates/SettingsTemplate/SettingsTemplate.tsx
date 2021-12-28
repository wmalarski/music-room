import React from "react";
import Layout from "../Layout/Layout";

export type SettingsTemplateProps = {
  appTitle: string;
  header: React.ReactNode;
  center: React.ReactNode;
};

const SettingsTemplate = ({
  appTitle,
  header,
  center,
}: SettingsTemplateProps): JSX.Element => (
  <Layout appTitle={appTitle} header={header}>
    {center}
  </Layout>
);

export default SettingsTemplate;
