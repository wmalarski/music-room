import { Input } from '@music-room/ui';
import { ReactElement } from 'react';

type Props = {
  link: string;
};

export const InviteLinkView = ({ link }: Props): ReactElement => (
  <Input readOnly value={link} />
);
