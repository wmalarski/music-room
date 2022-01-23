import { Profile, Room } from '@music-room/data-access';
import { Button, Card, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import * as Styles from './InviteAcceptView.styles';

type Props = {
  room: Room;
  profile: Profile;
  isLoading: boolean;
  onAcceptClick: () => void;
};

export const InviteAcceptView = ({
  room,
  profile,
  isLoading,
  onAcceptClick,
}: Props): ReactElement => {
  const { t } = useTranslation('invite');

  return (
    <Styles.Container justifyContent="center" alignItems="center">
      <Card direction="column" gap="md" space="lg">
        <Typography size="xl">{`${t('inviteHello')} ${
          profile.name
        }`}</Typography>
        <Typography size="xl">{`${t('inviteToRoom')} ${room.name}`}</Typography>
        <Button isLoading={isLoading} onClick={onAcceptClick}>
          {t('acceptInvitation')}
        </Button>
      </Card>
    </Styles.Container>
  );
};
