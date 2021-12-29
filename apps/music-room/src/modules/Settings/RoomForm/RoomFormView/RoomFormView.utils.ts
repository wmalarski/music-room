import { useMemo } from 'react';
import { RegisterOptions } from 'react-hook-form';
import useText from '../../../../utils/translations/useText';

export type RoomFormViewData = {
  name: string;
};

export const useRoomFormViewOptions = (): Record<
  keyof RoomFormViewData,
  RegisterOptions<RoomFormViewData>
> => {
  const text = useText();
  return useMemo(
    () => ({
      name: {
        required: {
          value: true,
          message: text('fieldIsRequired'),
        },
        minLength: {
          value: 3,
          message: text('errorMinLength')(3),
        },
      },
    }),
    [text]
  );
};
