import { Room } from '@music-room/data-access';
import { Button, Typography } from '@music-room/ui';
import { ReactElement } from 'react';
import { useText } from '../../../../utils';
import * as Styles from './InviteAcceptView.styles';

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
    <Styles.Container justifyContent="center" alignItems="center">
      <Styles.Content direction="column" gap="md">
        <Typography size="xl">{`${text('inviteToRoom')} ${
          room.name
        }`}</Typography>
        <Button isLoading={isLoading} onClick={onAcceptClick}>
          {text('acceptInvitation')}
        </Button>
      </Styles.Content>
    </Styles.Container>
  );
};
