import Link from 'next/link';
import { useState } from 'react';
import { useMemberContext } from '../../../../utils/room/MemberContext';
import { InviteLinkView } from './InviteLinkView/InviteLinkView';

type Props = {
  View?: typeof InviteLinkView;
};

export const InviteLink = ({
  View = InviteLinkView,
}: Props): JSX.Element | null => {
  const { room_hash } = useMemberContext();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: 'none' }}>
        <Link href={`/invite/${room_hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <View link={href} />}
    </>
  );
};
