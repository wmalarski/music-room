import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RegisterOptions } from 'react-hook-form';

export type CreateRoomFormData = {
  name: string;
  slug: string;
};

export type CreateRoomViewData = CreateRoomFormData & {
  profileId: number;
};

export const useCreateRoomViewOptions = (): Record<
  keyof CreateRoomFormData,
  RegisterOptions<CreateRoomFormData>
> => {
  const { t } = useTranslation('home');

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
      slug: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
        pattern: {
          value: /[A-Za-z0-9]{3,32}/,
          message: t('slugPatternIsRequired'),
        },
      },
    }),
    [t]
  );
};
