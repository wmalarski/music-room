import { Input } from '@music-room/ui';
import Link from 'next/link';
import { ReactElement, useState } from 'react';
import { useRoom } from '../../../utils/contexts/RoomContext';

export const InviteLink = (): ReactElement => {
  const { hash } = useRoom();

  const [href, setHref] = useState<string>();

  return (
    <>
      <div style={{ display: 'none' }}>
        <Link href={`/invite/${hash}`}>
          <a ref={(element) => setHref(element?.href)} />
        </Link>
      </div>
      {href && <Input readOnly value={href} />}
    </>
  );
};
