import React from "react";
import Layout from "../Layout/Layout";

export type GuestHomeTemplateProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

const GuestHomeTemplate = ({
  left,
  right,
}: GuestHomeTemplateProps): JSX.Element => (
  <Layout>
    {left}
    {right}
  </Layout>
);

export default GuestHomeTemplate;
