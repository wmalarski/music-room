import { Button } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
import { ReactElement, useState } from 'react';

type Props = {
  isLoading: boolean;
  onClick: () => void;
};

export const DeleteRoomView = ({ onClick }: Props): ReactElement => {
  const { t } = useTranslation('settings');

  const [isClicked, setIsClicked] = useState(false);

  const handleFirstClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <Button onClick={handleFirstClick}>{t('removeRoom')}</Button>
      {isClicked && <Button onClick={onClick}>{t('confirmRemoveRoom')}</Button>}
    </>
  );
};
