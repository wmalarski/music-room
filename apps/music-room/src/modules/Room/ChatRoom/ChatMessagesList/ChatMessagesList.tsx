import { SelectMessagesReturn } from '@music-room/data-access';
import { Card, Divider, Flex } from '@music-room/ui';
import { ReactElement, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { ChatMessage } from './ChatMessage/ChatMessage';
import * as Styles from './ChatMessagesList.styles';

type Props = {
  data?: SelectMessagesReturn;
  offset: number;
  limit: number;
  onOffsetChange: (offset: number) => void;
};

const estimateSize = (): number => 40;

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
    estimateSize,
  });

  const pairs = virtualizer.virtualItems.map((row) => ({
    message: data?.messages.at(row.index - data.offset),
    row,
  }));

  return (
    <Card space="xl" gap="md" direction="column">
      <Styles.Container ref={parentRef}>
        <Flex css={{ listContainer: virtualizer.totalSize }}>
          {pairs.map(({ row, message }) => (
            <Flex
              ref={row.measureRef}
              key={row.key}
              css={{ dynamicRow: row.start }}
              direction="column"
              gap="xs"
              spaceY="xs"
            >
              <ChatMessage message={message} />
              <Divider orientation="horizontal" color={5} />
            </Flex>
          ))}
        </Flex>
      </Styles.Container>
    </Card>
  );
};
