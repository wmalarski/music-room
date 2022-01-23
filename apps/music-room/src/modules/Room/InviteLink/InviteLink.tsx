import { useRoom } from '@music-room/data-access';
import { Input } from '@music-room/ui';
import Link from 'next/link';
import { ReactElement, useState } from 'react';

export const InviteLink = (): ReactElement => {
  const { hash } = useRoom();

  const [href, setHref] = useState<string>();

  const handleRef = (element: HTMLAnchorElement | null) => {
    setHref(element?.href);
  };

  return (
    <>
      <div style={{ display: 'none' }}>
        <Link href={`/invite/${hash}`}>
          <a ref={handleRef} />
        </Link>
      </div>
      {href && <Input data-testid="invite-input" readOnly value={href} />}
    </>
  );
};
