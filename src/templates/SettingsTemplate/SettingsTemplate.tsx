import React from "react";
import Layout from "../Layout/Layout";

export type SettingsTemplateProps = {
  appTitle: string;
  header: React.ReactNode;
  center: { key: string; node: React.ReactNode }[];
};

const SettingsTemplate = ({
  appTitle,
  header,
  center,
}: SettingsTemplateProps): JSX.Element => (
  <Layout appTitle={appTitle} header={header}>
    {center.map(({ key, node }) => (
      <React.Fragment key={key}>{node}</React.Fragment>
    ))}
  </Layout>
);

export default SettingsTemplate;
