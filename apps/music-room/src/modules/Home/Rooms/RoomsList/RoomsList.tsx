import { SelectMembersResult } from '@music-room/data-access';
import { Divider, Flex } from '@music-room/ui';
import { ReactElement, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import * as Styles from './RoomsList.styles';
import { RoomsListItem } from './RoomsListItem/RoomsListItem';

type Props = {
  offset: number;
  limit: number;
  data?: SelectMembersResult;
  onOffsetChange: (offset: number) => void;
};

const estimateSize = (): number => 40;

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
    estimateSize,
  });

  const pairs = virtualizer.virtualItems.map((row) => ({
    member: data?.members[row.index - offset],
    row,
  }));

  return (
    <Styles.Container ref={parentRef}>
      <Flex css={{ listContainer: virtualizer.totalSize }}>
        {pairs.map(({ row, member }) => (
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
        ))}
      </Flex>
    </Styles.Container>
  );
};
