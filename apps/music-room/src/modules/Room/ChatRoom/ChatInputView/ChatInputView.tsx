import { Message } from '@music-room/data-access';
import { Button, FormError, Input } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import { useErrorMessage } from '../../../../hooks/useErrorMessage';

export type ChatInputViewData = {
  url: string;
};

type Props = {
  isLoading: boolean;
  message?: Message | null;
  error: PostgrestError | null;
  onSubmit: (data: ChatInputViewData) => void;
};

export const ChatInputView = ({ error, onSubmit }: Props): ReactElement => {
  const { t } = useTranslation('room');

  const [query, setQuery] = useState('');

  // const { data: selections } = useSelectSuggestions({ query });
  // useEffect(() => console.log("selections", selections), [selections]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ url: query });
    setQuery('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const errorMessage = useErrorMessage({ error });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={t('addUrlPlaceholder')}
        value={query}
        onChange={handleChange}
      />
      {error && <FormError role="alert">{errorMessage}</FormError>}
      <Button type="submit">{t('addMessage')}</Button>
    </form>
  );
};
