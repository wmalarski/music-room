import { Message } from '@music-room/data-access';
import { Button, Input } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FormEvent, ReactElement } from 'react';

export type ChatInputViewData = {
  url: string;
};

type Props = {
  isLoading: boolean;
  message?: Message | null;
  error: PostgrestError | null;
  query: string;
  onSubmit: (data: ChatInputViewData) => void;
  onQueryChange: (query: string) => void;
};

export const ChatInputView = ({
  query,
  onSubmit,
  onQueryChange,
}: Props): ReactElement => {
  const { t } = useTranslation('room');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ url: query });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={t('addUrlPlaceholder')}
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">{t('addMessage')}</Button>
    </form>
  );
};
