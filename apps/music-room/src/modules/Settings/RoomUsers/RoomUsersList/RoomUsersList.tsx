import { Member, RoomRole, SelectMembersResult } from '@music-room/data-access';
import { Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { RoomUsersListItem } from './RoomUsersListItem/RoomUsersListItem';

type Props = {
  data?: SelectMembersResult;
  offset: number;
  onPageChange: (offset: number) => void;
  onRoleChange: (profile: Member, role: RoomRole) => void;
  onRemoveClick: (profile: Member) => void;
};

export const RoomUsersList = ({
  data,
  offset,
  onPageChange,
  onRoleChange,
  onRemoveClick,
}: Props): ReactElement => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualPages({
    onPageChange,
    start: offset,
    limit: data?.limit,
    size: data?.count ?? 0,
    parentRef,
    estimateSize: useCallback(() => 35, []),
    overscan: 5,
  });

  return (
    <Flex
      ref={parentRef}
      css={{
        height: `200px`,
        width: `400px`,
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
              <RoomUsersListItem
                member={member}
                onRoleChange={(role) => onRoleChange(member, role)}
                onRemoveClick={() => onRemoveClick(member)}
              />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
