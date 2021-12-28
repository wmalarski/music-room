import React from "react";
import Layout from "../Layout/Layout";

export type ProfilePageProps = {
  header: React.ReactNode;
  center: React.ReactNode;
};

const ProfileTemplate = ({ header, center }: ProfilePageProps): JSX.Element => (
  <Layout header={header}>{center}</Layout>
);

export default ProfileTemplate;
