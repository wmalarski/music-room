import { SelectMessagesReturn } from '@music-room/data-access';
import { Card, Divider, Flex } from '@music-room/ui';
import { ReactElement, Ref } from 'react';
import { useVirtual } from 'react-virtual';
import { ChatMessage } from './ChatMessage/ChatMessage';
import * as Styles from './ChatMessagesList.styles';

type Props = {
  data?: SelectMessagesReturn;
  virtualizer: ReturnType<typeof useVirtual>;
  parentRef: Ref<HTMLDivElement>;
};

export const ChatMessagesList = ({
  data,
  virtualizer,
  parentRef,
}: Props): ReactElement => {
  const pairs = virtualizer.virtualItems.map((row) => ({
    message: data?.messages[row.index - data.offset],
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
