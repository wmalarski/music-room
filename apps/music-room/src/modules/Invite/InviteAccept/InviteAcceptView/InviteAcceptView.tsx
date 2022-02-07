import { Profile, Room } from '@music-room/data-access';
import { Button, Card, FormError, Typography } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';
import * as Styles from './InviteAcceptView.styles';

type Props = {
  room: Room;
  profile: Profile;
  isLoading: boolean;
  error: PostgrestError | null;
  onAcceptClick: () => void;
};

export const InviteAcceptView = ({
  room,
  error,
  profile,
  isLoading,
  onAcceptClick,
}: Props): ReactElement => {
  const { t } = useTranslation('invite');

  const errorMessage = useErrorMessage({ error });

  return (
    <Styles.Container justifyContent="center" alignItems="center">
      <Card direction="column" gap="md" space="lg">
        <Typography size="xl">{`${t('inviteHello')} ${
          profile.name
        }`}</Typography>
        <Typography size="xl">{`${t('inviteToRoom')} ${room.name}`}</Typography>
        {error && <FormError role="alert">{errorMessage}</FormError>}
        <Button isLoading={isLoading} onClick={onAcceptClick}>
          {t('acceptInvitation')}
        </Button>
      </Card>
    </Styles.Container>
  );
};
