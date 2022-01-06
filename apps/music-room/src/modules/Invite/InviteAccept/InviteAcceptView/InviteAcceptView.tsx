import { Room } from '@music-room/data-access';
import { Button, Typography } from '@music-room/ui';
import { ReactElement } from 'react';
import { useText } from '../../../../utils';

type Props = {
  room: Room;
  isLoading: boolean;
  onAcceptClick: () => void;
};

export const InviteAcceptView = ({
  room,
  isLoading,
  onAcceptClick,
}: Props): ReactElement => {
  const text = useText();

  return (
    <div>
      <Typography>{text('inviteToRoom')(room.name)}</Typography>
      <Button isLoading={isLoading} onClick={onAcceptClick}>
        {text('acceptInvitation')}
      </Button>
    </div>
  );
};
