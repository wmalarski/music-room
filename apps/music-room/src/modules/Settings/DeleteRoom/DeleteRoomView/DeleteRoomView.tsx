import { Button, Card, FormError, Typography } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ReactElement, useState } from 'react';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';

type Props = {
  isLoading: boolean;
  error: PostgrestError | null;
  onClick: () => void;
};

export const DeleteRoomView = ({ onClick, error }: Props): ReactElement => {
  const { t } = useTranslation('settings');

  const [isClicked, setIsClicked] = useState(false);

  const handleFirstClick = () => {
    setIsClicked(true);
  };

  const errorMessage = useErrorMessage({ error });

  return (
    <Card space="xl" direction="column" gap="md">
      <Typography size="md" kind="description">
        {t('removeRoom')}
      </Typography>
      <Button onClick={handleFirstClick}>
        <Typography size="sm">{t('removeRoom')}</Typography>
      </Button>
      {isClicked && (
        <Button onClick={onClick}>
          <Typography size="sm">{t('confirmRemoveRoom')}</Typography>
        </Button>
      )}
      {error && <FormError role="alert">{errorMessage}</FormError>}
    </Card>
  );
};
