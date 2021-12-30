import { Message } from '@music-room/data-access';
import { Button, Input } from '@music-room/ui';
import { PostgrestError } from '@supabase/supabase-js';
import { ReactElement } from 'react';
import { useText } from '../../../../utils';

type Data = {
  url: string;
};

type Props = {
  isLoading: boolean;
  message?: Message | null;
  error: PostgrestError | null;
  query: string;
  onSubmit: (data: Data) => void;
  onQueryChange: (query: string) => void;
};

export const ChatInputView = ({
  query,
  onSubmit,
  onQueryChange,
}: Props): ReactElement => {
  const text = useText();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ url: query });
      }}
    >
      <Input
        placeholder={text('addUrlPlaceholder')}
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <Button type="submit">{text('addMessage')}</Button>
    </form>
  );
};
