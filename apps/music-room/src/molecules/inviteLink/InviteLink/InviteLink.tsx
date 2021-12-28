import Link from "next/link";
import React, { useState } from "react";
import { useMemberContext } from "../../../utils/room/MemberContext";
import InviteLinkView, {
  InviteLinkViewProps,
} from "../InviteLinkView/InviteLinkView";

export type InviteLinkProps = {
  View?: React.ComponentType<InviteLinkViewProps>;
};

const InviteLink = ({
  View = InviteLinkView,
}: InviteLinkProps): JSX.Element | null => {
  const { room_hash } = useMemberContext();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: "none" }}>
        <Link href={`/invite/${room_hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <View link={href} />}
    </>
  );
};

export default InviteLink;
