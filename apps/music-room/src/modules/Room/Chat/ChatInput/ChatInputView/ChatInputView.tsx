import { PostgrestError } from '@supabase/supabase-js';
import React from 'react';
import { Message } from '../../../../../services/data/types';
import useText from '../../../../../utils/translations/useText';
import { Button, Input } from '../../../atoms';

export type ChatInputViewData = {
  url: string;
};

export type ChatInputViewProps = {
  isLoading: boolean;
  message?: Message | null;
  error: PostgrestError | null;
  query: string;
  onSubmit: (data: ChatInputViewData) => void;
  onQueryChange: (query: string) => void;
};

const ChatInputView = ({
  query,
  onSubmit,
  onQueryChange,
}: ChatInputViewProps): JSX.Element => {
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

export default ChatInputView;
