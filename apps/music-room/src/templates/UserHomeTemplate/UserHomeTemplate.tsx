import React from "react";
import Layout from "../Layout/Layout";

export type UserHomeTemplateProps = {
  header: React.ReactNode;
  left?: React.ReactNode;
  center: React.ReactNode;
};

const UserHomeTemplate = ({
  center,
  left,
  header,
}: UserHomeTemplateProps): JSX.Element => (
  <Layout header={header}>
    {left}
    {center}
  </Layout>
);

export default UserHomeTemplate;
