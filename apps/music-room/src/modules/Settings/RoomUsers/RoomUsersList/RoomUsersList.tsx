import { Member, RoomRole, SelectMembersResult } from '@music-room/data-access';
import { Card, Divider, Flex } from '@music-room/ui';
import { ReactElement, useRef } from 'react';
import { useVirtualPages } from '../../../../hooks/useVirtualPages';
import { RoomUsersHeader } from './RoomUsersHeader/RoomUsersHeader';
import * as Styles from './RoomUsersList.styles';
import { RoomUsersListHeader } from './RoomUsersListHeader/RoomUsersListHeader';
import { RoomUsersListItem } from './RoomUsersListItem/RoomUsersListItem';

type Props = {
  data?: SelectMembersResult;
  offset: number;
  query: string;
  limit: number;
  onQueryChange: (query: string) => void;
  onOffsetChange: (offset: number) => void;
  onRoleChange: (profile: Member, role: RoomRole) => void;
  onRemoveClick: (profile: Member) => void;
};

const estimateSize = (): number => 35;

export const RoomUsersList = ({
  data,
  offset,
  limit,
  query,
  onQueryChange,
  onOffsetChange,
  onRoleChange,
  onRemoveClick,
}: Props): ReactElement => {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualPages({
    start: offset,
    limit,
    size: data?.count ?? 10,
    parentRef,
    onOffsetChange,
    estimateSize,
  });

  const handleRoleChange = (member?: Member) => (role: RoomRole) => {
    if (!member) return;
    onRoleChange(member, role);
  };

  const handleRemoveClick = (member?: Member) => () => {
    if (!member) return;
    onRemoveClick(member);
  };

  const pairs = virtualizer.virtualItems.map((row) => ({
    member: data?.members.at(row.index - data.offset),
    row,
  }));

  return (
    <Card space="xl" gap="md" direction="column">
      <RoomUsersHeader query={query} onQueryChange={onQueryChange} />
      <RoomUsersListHeader />
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
              <RoomUsersListItem
                member={member}
                onRoleChange={handleRoleChange(member)}
                onRemoveClick={handleRemoveClick(member)}
              />
              <Divider orientation="horizontal" color={5} />
            </Flex>
          ))}
        </Flex>
      </Styles.Container>
    </Card>
  );
};
