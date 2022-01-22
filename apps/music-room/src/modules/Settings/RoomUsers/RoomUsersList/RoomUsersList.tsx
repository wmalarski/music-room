import { Member, RoomRole, SelectMembersResult } from '@music-room/data-access';
import { Card, Divider, Flex } from '@music-room/ui';
import { ReactElement, useCallback, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { RoomUsersHeader } from './RoomUsersHeader/RoomUsersHeader';
import * as Styles from './RoomUsersList.styles';
import { RoomUsersListHeader } from './RoomUsersListHeader/RoomUsersListHeader';
import { RoomUsersListItem } from './RoomUsersListItem/RoomUsersListItem';

type Props = {
  data?: SelectMembersResult;
  offset: number;
  query: string;
  onQueryChange: (query: string) => void;
  onPageChange: (offset: number) => void;
  onRoleChange: (profile: Member, role: RoomRole) => void;
  onRemoveClick: (profile: Member) => void;
};

export const RoomUsersList = ({
  data,
  offset,
  query,
  onQueryChange,
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
    overscan: 1,
  });

  const handleRoleChange = (member: Member) => (role: RoomRole) => {
    onRoleChange(member, role);
  };

  const handleRemoveClick = (member: Member) => () => {
    onRemoveClick(member);
  };

  return (
    <Card space="xl" gap="md" direction="column">
      <RoomUsersHeader query={query} onQueryChange={onQueryChange} />
      <RoomUsersListHeader />
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
                <RoomUsersListItem
                  member={member}
                  onRoleChange={handleRoleChange(member)}
                  onRemoveClick={handleRemoveClick(member)}
                />
                <Divider orientation="horizontal" color={5} />
              </Flex>
            );
          })}
        </Flex>
      </Styles.Container>
    </Card>
  );
};
