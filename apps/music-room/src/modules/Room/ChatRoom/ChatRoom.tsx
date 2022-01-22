import {
  useInsertMessage,
  useRole,
  useSelectMessages,
  useSubscribeToMessages,
} from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import {
  ChatInputView,
  ChatInputViewData,
} from './ChatInputView/ChatInputView';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';

const selectLimit = 40;

export const ChatRoom = (): ReactElement => {
  const { room_id: roomId, profile_id: profileId } = useRole();

  const [offset, setOffset] = useState(0);
  const [query, setQuery] = useState('');

  const { data } = useSelectMessages(
    {
      roomId,
      limit: selectLimit,
      offset,
    },
    {
      keepPreviousData: true,
    }
  );

  useSubscribeToMessages({ roomId, limit: 20, offset, profileId });

  const {
    mutate: insertMessage,
    error,
    isLoading,
  } = useInsertMessage({
    roomId,
    limit: 20,
    offset,
  });

  const handleSubmit = (data: ChatInputViewData) => {
    insertMessage({
      profile_id: profileId,
      room_id: roomId,
      data: { kind: 'message#0.0.1', url: data.url },
    });
  };

  const handleQueryChange = useDebounce((index: number) => {
    setOffset(index);
  }, 500);

  // const { data: selections } = useSelectSuggestions({ query });

  // useEffect(() => console.log("selections", selections), [selections]);

  return (
    <Flex direction="column">
      <ChatMessagesList
        data={data}
        offset={offset}
        limit={selectLimit}
        onOffsetChange={handleQueryChange}
      />
      ;
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
