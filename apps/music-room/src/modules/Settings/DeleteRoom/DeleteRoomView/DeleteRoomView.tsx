import { Button, Card, Typography } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ReactElement, useState } from 'react';

type Props = {
  isLoading: boolean;
  error: PostgrestError | null;
  onClick: () => void;
};

export const DeleteRoomView = ({ onClick }: Props): ReactElement => {
  const { t } = useTranslation('settings');

  const [isClicked, setIsClicked] = useState(false);

  const handleFirstClick = () => {
    setIsClicked(true);
  };

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
    </Card>
  );
};
