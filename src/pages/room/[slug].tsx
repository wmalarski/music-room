import fetch from "cross-fetch";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../atoms/Layout/Layout";
import { SelectRolesReturn } from "../../services/data/roles/selectRoles";

export type RoomPageProps = {
  roles: SelectRolesReturn[];
};

const RoomPage = ({ roles }: RoomPageProps): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  const roomSlug = Array.isArray(slug) ? slug.join("") : slug;

  return (
    <Layout appTitle={roomSlug}>
      <pre>{JSON.stringify({ slug, roomSlug, roles }, null, 2)}</pre>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<RoomPageProps> = async ({
  params: { slug } = {},
}) => {
  const roomSlug = Array.isArray(slug) ? slug.join("") : slug;
  console.log("getServerSideProps", roomSlug);
  try {
    const response = await fetch(
      `${process.env.API_URL}/data/roles?slug=${roomSlug}`
    );
    const roles = await response.json();
    console.log("roles", roles);
    return { props: { roles } };
  } catch (error: any) {
    console.log("error", error);
    return { notFound: true };
  }
};

export default RoomPage;
