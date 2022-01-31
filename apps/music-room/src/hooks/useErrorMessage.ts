import { SupabaseErrorCode } from '@music-room/data-access';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';

type UseErrorMessageArgs = {
  error: PostgrestError | null;
  customMessages?: Record<string, string>;
};

export const useErrorMessage = ({
  customMessages,
  error,
}: UseErrorMessageArgs): string | null => {
  const { t } = useTranslation();

  if (!error) return null;

  const custom = customMessages?.[error.code];
  if (custom) return custom;

  switch (error.code) {
    case SupabaseErrorCode.UniquenessViolation:
      return t('uniquenessViolation');
    default:
      return error.message;
  }
};
