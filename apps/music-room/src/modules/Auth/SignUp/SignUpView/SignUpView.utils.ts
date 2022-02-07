import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RegisterOptions, UseFormWatch } from 'react-hook-form';

export type SignUpViewData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const useSignUpViewOptions = (
  watch: UseFormWatch<SignUpViewData>
): Record<keyof SignUpViewData, RegisterOptions<SignUpViewData>> => {
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
        maxLength: {
          value: 32,
          message: `${t('errorMaxLength')}: 32`,
        },
      },
      password: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
        minLength: {
          value: 8,
          message: `${t('errorMinLength')}: 8`,
        },
      },
      confirmPassword: {
        required: {
          value: true,
          message: t('fieldIsRequired'),
        },
        minLength: {
          value: 8,
          message: `${t('errorMinLength')}: 8`,
        },
        validate: (value: string) => {
          if (value === watch('password', '')) return;
          return `${t('fieldIsDifferent')}`;
        },
      },
    }),
    [t, watch]
  );
};
