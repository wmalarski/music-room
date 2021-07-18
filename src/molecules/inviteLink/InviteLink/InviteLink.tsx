import Link from "next/link";
import React, { useState } from "react";
import { useMemberContext } from "../../../utils/room/MemberContext";
import InviteLinkView from "../InviteLinkView/InviteLinkView";

const InviteLink = (): JSX.Element | null => {
  const { hash } = useMemberContext();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: "none" }}>
        <Link href={`/invite/${hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <InviteLinkView link={href} />}
    </>
  );
};

export default InviteLink;
