import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RegisterOptions } from 'react-hook-form';

export type SignInViewData = {
  email: string;
  password: string;
};

export const useSignInViewOptions = (): Record<
  keyof SignInViewData,
  RegisterOptions<SignInViewData>
> => {
  const { t } = useTranslation('common');
  return useMemo(
    () => ({
      email: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
        minLength: {
          value: 3,
          message: `${t('errorMinLength')}: 3`,
        },
      },
      password: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
      },
    }),
    [t]
  );
};
