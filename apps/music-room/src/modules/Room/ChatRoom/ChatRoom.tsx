import {
  useInsertMessage,
  useRole,
  useSelectMessages,
  useSubscribeToMessages,
} from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useRef } from 'react';
import { useDebouncedState } from '../../../hooks/useDebouncedState';
import {
  getOffsetsForIndex,
  useVirtualPages,
} from '../../../hooks/useVirtualPages';
import {
  ChatInputView,
  ChatInputViewData,
} from './ChatInputView/ChatInputView';
import { ChatMessagesList } from './ChatMessagesList/ChatMessagesList';
import { estimateSize, selectLimit } from './ChatRoom.utils';

export const ChatRoom = (): ReactElement => {
  const { room_id: roomId, profile_id: profileId } = useRole();

  const parentRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useDebouncedState(0, 500);

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

  const virtualizer = useVirtualPages({
    start: offset,
    limit: selectLimit,
    size: data?.count ?? 0,
    parentRef,
    onOffsetChange: setOffset,
    estimateSize,
  });

  const {
    mutate: insertMessage,
    error,
    isLoading,
  } = useInsertMessage({
    roomId,
    limit: selectLimit,
    offsets: getOffsetsForIndex({
      index: data?.count,
      limit: selectLimit,
    }),
  });

  useSubscribeToMessages({
    roomId,
    limit: selectLimit,
    offset,
    profileId,
  });

  const handleSubmit = (args: ChatInputViewData) => {
    insertMessage({
      profile_id: profileId,
      room_id: roomId,
      data: { kind: 'message#0.0.1', url: args.url },
    });
    virtualizer.scrollToIndex(data?.count ?? 0);
  };

  return (
    <Flex direction="column">
      <ChatMessagesList
        data={data}
        parentRef={parentRef}
        virtualizer={virtualizer}
      />
      ;
      <ChatInputView
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />
    </Flex>
  );
};
