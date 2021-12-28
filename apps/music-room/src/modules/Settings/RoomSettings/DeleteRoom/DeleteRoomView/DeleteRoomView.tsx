import React, { useState } from 'react';
import useText from '../../../../../utils/translations/useText';
import { Button } from '../../../atoms';

export type DeleteRoomViewProps = {
  isLoading: boolean;
  onClicked: () => void;
};

const DeleteRoomView = ({ onClicked }: DeleteRoomViewProps): JSX.Element => {
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

export default DeleteRoomView;
