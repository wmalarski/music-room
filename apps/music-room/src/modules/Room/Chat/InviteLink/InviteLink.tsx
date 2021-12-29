import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useRoom } from '../../../../utils/contexts/RoomContext';
import { InviteLinkView } from './InviteLinkView/InviteLinkView';

type Props = {
  View?: typeof InviteLinkView;
};

export const InviteLink = ({ View = InviteLinkView }: Props): ReactElement => {
  const { hash } = useRoom();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: 'none' }}>
        <Link href={`/invite/${hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <View link={href} />}
    </>
  );
};
