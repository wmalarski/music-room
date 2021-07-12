import Link from "next/link";
import React, { useState } from "react";
import { RoomProfile } from "../../../services/data/types";
import InviteLinkForm from "../InviteLinkForm/InviteLinkForm";

export type InviteLinkProps = {
  room: RoomProfile;
};

const InviteLink = ({ room }: InviteLinkProps): JSX.Element | null => {
  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: "none" }}>
        <Link href={`/invite/${room.hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <InviteLinkForm link={href} />}
    </>
  );
};

export default InviteLink;
