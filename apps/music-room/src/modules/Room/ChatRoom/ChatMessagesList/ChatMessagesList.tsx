import { SelectMessagesReturn } from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { ChatMessage } from './ChatMessage/ChatMessage';

type Props = {
  data?: SelectMessagesReturn;
  offset: number;
  onOffsetChange: (offset: number) => void;
};

export const ChatMessagesList = ({
  data,
  offset,
  onOffsetChange,
}: Props): ReactElement => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualPages({
    start: offset,
    limit: data?.limit,
    onOffsetChange,
    size: data?.count ?? 0,
    parentRef,
    estimateSize: useCallback(() => 40, []),
    overscan: 5,
  });

  return (
    <Flex
      ref={parentRef}
      css={{
        height: '20vh',
        width: '$xl',
      }}
    >
      <Flex direction="column" css={{ listContainer: virtualizer.totalSize }}>
        {virtualizer.virtualItems.map((row) => {
          const message = data?.messages[row.index - data.offset];
          if (!message) return null;
          return (
            <Flex key={row.index} css={{ listRow: `${row.size} ${row.start}` }}>
              <ChatMessage key={message.id} message={message} />;
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
