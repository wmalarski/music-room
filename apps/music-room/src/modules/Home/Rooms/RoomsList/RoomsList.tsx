import { SelectMembersResult } from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { RoomsListItem } from './RoomsListItem/RoomsListItem';

type Props = {
  offset: number;
  data?: SelectMembersResult;
  onPageChange: (offset: number) => void;
};

export const RoomsList = ({
  data,
  offset,
  onPageChange,
}: Props): ReactElement => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualPages({
    start: offset,
    limit: data?.limit,
    onPageChange,
    size: data?.count ?? 0,
    parentRef,
    estimateSize: useCallback(() => 250, []),
    overscan: 5,
  });

  return (
    <Flex
      ref={parentRef}
      css={{
        height: '60vh',
        // height: `100%`,
        // width: `400px`,
        overflow: 'auto',
      }}
    >
      <Flex direction="column" css={{ listContainer: virtualizer.totalSize }}>
        {virtualizer.virtualItems.map((row) => {
          const member = data?.members[row.index - data.offset];
          if (!member) return null;
          return (
            <Flex
              key={member.profile_id}
              css={{ listRow: `${row.size} ${row.start}` }}
            >
              <RoomsListItem member={member} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
