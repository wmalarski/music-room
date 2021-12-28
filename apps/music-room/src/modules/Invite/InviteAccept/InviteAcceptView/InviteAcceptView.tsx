import React from 'react';
import { Room } from '../../../../services/data/types';
import useText from '../../../../utils/translations/useText';
import { Button, Typography } from '../../../atoms';

export type InviteAcceptViewProps = {
  room: Room;
  isLoading: boolean;
  onAcceptClicked: () => void;
};

const InviteAcceptView = ({
  room,
  isLoading,
  onAcceptClicked,
}: InviteAcceptViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Typography>{text('inviteToRoom')(room.name)}</Typography>
      <Button isLoading={isLoading} onClick={onAcceptClicked}>
        {text('acceptInvitation')}
      </Button>
    </div>
  );
};

export default InviteAcceptView;
