import { SelectMembersResult } from '@music-room/data-access';
import { Divider, Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import * as Styles from './RoomsList.styles';
import { RoomsListItem } from './RoomsListItem/RoomsListItem';

type Props = {
  offset: number;
  limit: number;
  data?: SelectMembersResult;
  onOffsetChange: (offset: number) => void;
};

export const RoomsList = ({
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
    <Styles.Container ref={parentRef}>
      <Flex css={{ listContainer: virtualizer.totalSize }}>
        {virtualizer.virtualItems.map((row) => {
          const member = data?.members[row.index - data.offset];
          if (!member) return null;
          return (
            <Flex
              ref={row.measureRef}
              key={row.key}
              css={{ dynamicRow: row.start }}
              direction="column"
              gap="xs"
              spaceY="xs"
            >
              <RoomsListItem member={member} />
              <Divider orientation="horizontal" color={5} />
            </Flex>
          );
        })}
      </Flex>
    </Styles.Container>
  );
};
