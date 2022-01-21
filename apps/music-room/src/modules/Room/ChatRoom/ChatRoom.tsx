import {
  useInsertMessage,
  useRole,
  useSelectMessages,
  useSubscribeToMessages,
} from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useState } from 'react';
import {
  ChatInputView,
  ChatInputViewData,
} from './ChatInputView/ChatInputView';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';

export const ChatRoom = (): ReactElement => {
  const { room_id: roomId, profile_id: profileId } = useRole();

  const [offset, setOffset] = useState(0);

  const { data } = useSelectMessages({ roomId, limit: 20, offset });

  const { profile_id, room_id } = useRole();

  const [query, setQuery] = useState('');

  const {
    mutate: insertMessage,
    error,
    isLoading,
  } = useInsertMessage({
    roomId: room_id,
    limit: 20,
    offset,
  });

  const handleSubmit = (data: ChatInputViewData) => {
    insertMessage({
      profile_id,
      room_id,
      data: { kind: 'message#0.0.1', url: data.url },
    });
  };

  useSubscribeToMessages({ roomId, limit: 20, offset, profileId });

  // const { data: selections } = useSelectSuggestions({ query });

  // useEffect(() => console.log("selections", selections), [selections]);

  return (
    <Flex direction="column">
      <ChatMessagesList data={data} offset={offset} onPageChange={setOffset} />;
      <ChatInputView
        error={error}
        isLoading={isLoading}
        onQueryChange={setQuery}
        query={query}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};
