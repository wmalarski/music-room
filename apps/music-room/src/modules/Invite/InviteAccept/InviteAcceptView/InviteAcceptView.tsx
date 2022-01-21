import { Room } from '@music-room/data-access';
import { Button, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
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
  const { t } = useTranslation('invite');

  return (
    <Styles.Container justifyContent="center" alignItems="center">
      <Styles.Content direction="column" gap="md">
        <Typography size="xl">{`${t('inviteToRoom')} ${room.name}`}</Typography>
        <Button isLoading={isLoading} onClick={onAcceptClick}>
          {t('acceptInvitation')}
        </Button>
      </Styles.Content>
    </Styles.Container>
  );
};
