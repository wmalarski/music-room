import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout/Layout";
import {
  selectRoles,
  SelectRolesReturn,
} from "../../services/data/roles/selectRoles";
import { supabase } from "../../services/supabase";

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
  req,
}) => {
  const roomSlug = Array.isArray(slug) ? slug.join("") : slug;
  if (!roomSlug) return { notFound: true };

  const { user } = await supabase.auth.api.getUserByCookie(req);
  console.log("user", user);
  if (!user) return { notFound: true };

  const roles = await selectRoles({
    queryKey: [
      "roles",
      {
        roomSlug,
        userId: user.id,
      },
    ],
  });

  return { props: { roles } };
};

export default RoomPage;
