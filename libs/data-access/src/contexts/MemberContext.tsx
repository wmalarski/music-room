import { ReactElement, ReactNode } from 'react';
import { Member } from '../data/types';
import { ProfileContextProvider } from './ProfileContext';
import { RoleContextProvider } from './RoleContext';
import { RoomContextProvider } from './RoomContext';

type Props = {
  children: ReactNode;
  member: Member;
};

export const MemberContextProvider = ({
  children,
  member,
}: Props): ReactElement => {
  return (
    <ProfileContextProvider
      initialProfile={{
        avatar: member.profile_avatar,
        id: member.profile_id,
        name: member.profile_name,
        user_id: member.user_id,
      }}
    >
      <RoomContextProvider
        initialRoom={{
          author_id: member.room_author_id,
          data: { kind: 'room#0.0.1' },
          hash: member.room_hash,
          id: member.room_id,
          name: member.room_name,
          slug: member.room_slug,
        }}
      >
        <RoleContextProvider
          initialRole={{
            id: member.id,
            profile_id: member.profile_id,
            role: member.role,
            room_id: member.room_id,
          }}
        >
          {children}
        </RoleContextProvider>
      </RoomContextProvider>
    </ProfileContextProvider>
  );
};
