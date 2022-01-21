import { Member, RoomRole, SelectMembersResult } from '@music-room/data-access';
import { Card, Flex, Typography } from '@music-room/ui';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('settings');

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

  const handleRoleChange = (member: Member) => (role: RoomRole) => {
    onRoleChange(member, role);
  };

  const handleRemoveClick = (member: Member) => () => {
    onRemoveClick(member);
  };

  return (
    <Card space="xl" gap="md" direction="column">
      <Typography size="md" kind="description">
        {t('updateRoom')}
      </Typography>
      <Flex
        ref={parentRef}
        css={{
          height: `200px`,
          overflow: 'auto',
        }}
      >
        <Flex css={{ listContainer: virtualizer.totalSize }}>
          {virtualizer.virtualItems.map((row) => {
            const member = data?.members[row.index - data.offset];
            if (!member) return null;
            return (
              <Flex
                ref={row.measureRef}
                key={row.key}
                css={{ dynamicRow: row.start }}
              >
                <RoomUsersListItem
                  member={member}
                  onRoleChange={handleRoleChange(member)}
                  onRemoveClick={handleRemoveClick(member)}
                />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Card>
  );
};
