import { Button } from '@music-room/ui';
import { ReactElement, useState } from 'react';
import { useText } from '../../../../utils';

type Props = {
  isLoading: boolean;
  onClick: () => void;
};

export const DeleteRoomView = ({ onClick }: Props): ReactElement => {
  const text = useText();

  const [isClicked, setIsClicked] = useState(false);

  const handleFirstClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <Button onClick={handleFirstClick}>{text('removeRoom')}</Button>
      {isClicked && (
        <Button onClick={onClick}>{text('confirmRemoveRoom')}</Button>
      )}
    </>
  );
};
