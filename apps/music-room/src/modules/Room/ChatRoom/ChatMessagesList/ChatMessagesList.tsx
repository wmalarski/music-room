import { SelectMessagesReturn } from '@music-room/data-access';
import { Card, Divider, Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { ChatMessage } from './ChatMessage/ChatMessage';
import * as Styles from './ChatMessagesList.styles';

type Props = {
  data?: SelectMessagesReturn;
  offset: number;
  limit: number;
  onOffsetChange: (offset: number) => void;
};

export const ChatMessagesList = ({
  data,
  offset,
  limit,
  onOffsetChange,
}: Props): ReactElement => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualPages({
    start: offset,
    limit,
    size: data?.count ?? 0,
    parentRef,
    onOffsetChange,
    estimateSize: useCallback(() => 40, []),
  });

  return (
    <Card space="xl" gap="md" direction="column">
      <Styles.Container ref={parentRef}>
        <Flex css={{ listContainer: virtualizer.totalSize }}>
          {virtualizer.virtualItems.map((row) => {
            const message = data?.messages[row.index - data.offset];
            if (!message) return null;
            return (
              <Flex
                ref={row.measureRef}
                key={row.key}
                css={{ dynamicRow: row.start }}
                direction="column"
                gap="xs"
                spaceY="xs"
              >
                <ChatMessage key={message.id} message={message} />;
                <Divider orientation="horizontal" color={5} />
              </Flex>
            );
          })}
        </Flex>
      </Styles.Container>
    </Card>
  );
};
