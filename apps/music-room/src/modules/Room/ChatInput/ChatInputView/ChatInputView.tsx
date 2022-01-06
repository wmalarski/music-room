import { Message } from '@music-room/data-access';
import { Button, Input } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ChangeEvent, FormEvent, ReactElement } from 'react';
import { useText } from '../../../../utils';

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
  const text = useText();

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
        placeholder={text('addUrlPlaceholder')}
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">{text('addMessage')}</Button>
    </form>
  );
};
