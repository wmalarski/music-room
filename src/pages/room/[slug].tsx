import { useRouter } from "next/router";
import React from "react";
import Layout from "../../atoms/Layout/Layout";
import { useUserContext } from "../../molecules/auth/UserContext";
import RoomContainer from "../../organisms/RoomContainer/RoomContainer";

const RoomPage = (): JSX.Element => {
  const router = useRouter();
  const { slug } = router.query;
  const roomSlug = Array.isArray(slug) ? undefined : slug;

  const { user } = useUserContext();

  return (
    <Layout appTitle={roomSlug}>
      {roomSlug && user && (
        <RoomContainer roomSlug={roomSlug} userId={user.id} />
      )}
    </Layout>
  );
};

export default RoomPage;
