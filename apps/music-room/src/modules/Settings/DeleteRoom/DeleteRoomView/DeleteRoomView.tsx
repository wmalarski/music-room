import { Button } from '@music-room/ui';
import { ReactElement, useState } from 'react';
import { useText } from '../../../../utils';

type Props = {
  isLoading: boolean;
  onClicked: () => void;
};

export const DeleteRoomView = ({ onClicked }: Props): ReactElement => {
  const text = useText();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Button onClick={() => setIsClicked(true)}>{text('removeRoom')}</Button>
      {isClicked && (
        <Button onClick={onClicked}>{text('confirmRemoveRoom')}</Button>
      )}
    </>
  );
};
