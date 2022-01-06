import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RegisterOptions } from 'react-hook-form';

export type RoomFormViewData = {
  name: string;
};

export const useRoomFormViewOptions = (): Record<
  keyof RoomFormViewData,
  RegisterOptions<RoomFormViewData>
> => {
  const { t } = useTranslation('common');

  return useMemo(
    () => ({
      name: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
        minLength: {
          value: 3,
          message: `${t('errorMinLength')}: 3`,
        },
      },
    }),
    [t]
  );
};
