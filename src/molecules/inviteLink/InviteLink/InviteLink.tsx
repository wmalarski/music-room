import Link from "next/link";
import React, { useState } from "react";
import { useRoomContext } from "../../../utils/room/RoomContext";
import InviteLinkForm from "../InviteLinkForm/InviteLinkForm";

const InviteLink = (): JSX.Element | null => {
  const { hash } = useRoomContext();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: "none" }}>
        <Link href={`/invite/${hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <InviteLinkForm link={href} />}
    </>
  );
};

export default InviteLink;
