import { useInsertMessage, useRole } from '@music-room/data-access';
import { ReactElement, useState } from 'react';
import { ChatInputView } from './ChatInputView/ChatInputView';

type Props = {
  View?: typeof ChatInputView;
};

export const ChatInput = ({ View = ChatInputView }: Props): ReactElement => {
  const { profile_id, room_id } = useRole();

  const { mutate: insertMessage, isLoading, data, error } = useInsertMessage();

  const [query, setQuery] = useState('');

  // const { data: selections } = useSelectSuggestions({ query });

  // useEffect(() => console.log("selections", selections), [selections]);

  return (
    <View
      query={query}
      isLoading={isLoading}
      message={data}
      error={error}
      onQueryChange={setQuery}
      onSubmit={({ url }) =>
        insertMessage({
          profile_id,
          room_id,
          data: { kind: 'message#0.0.1', url },
        })
      }
    />
  );
};