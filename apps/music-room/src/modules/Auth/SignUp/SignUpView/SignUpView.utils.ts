import { TFunction, useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import { RegisterOptions, Resolver } from 'react-hook-form';

export type SignUpViewData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpViewContext = {
  t: TFunction;
};

export const useSignUpViewOptions = (): Record<
  keyof SignUpViewData,
  RegisterOptions<SignUpViewData>
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
        maxLength: {
          value: 32,
          message: `${t('errorMaxLength')}: 3`,
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
      },
    }),
    [t]
  );
};

export const signUpViewResolver: Resolver<SignUpViewData, SignUpViewContext> = (
  values,
  context
) => {
  const { confirmPassword, password } = values;

  if (!context) return { values, errors: {} };

  return {
    errors: {
      ...(confirmPassword !== password
        ? {
            confirmPassword: {
              type: 'required',
              message: context.t('fieldIsDifferent'),
              types: [],
            },
          }
        : {}),
    },
    values,
  };
};
