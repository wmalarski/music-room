import { useMemo } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { useText } from '../../../../utils';

export type CreateRoomViewData = {
  name: string;
  slug: string;
};

export const useCreateRoomViewOptions = (): Record<
  keyof CreateRoomViewData,
  RegisterOptions<CreateRoomViewData>
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
          message: `${text('errorMinLength')}: 3`,
        },
      },
      slug: {
        required: {
          value: true,
          message: text('fieldIsRequired'),
        },
        pattern: {
          value: /[A-Za-z0-9]{3,32}/,
          message: text('slugPatternIsRequired'),
        },
      },
    }),
    [text]
  );
};
