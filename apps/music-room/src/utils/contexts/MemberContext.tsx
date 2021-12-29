import { Member } from '@music-room/data-access';
import { ReactElement, ReactNode } from 'react';
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
}: Props): ReactElement => (
  <ProfileContextProvider
    profile={{
      avatar: member.profile_avatar,
      id: member.profile_id,
      name: member.profile_name,
      user_id: member.user_id,
    }}
  >
    <RoomContextProvider
      room={{
        author_id: member.room_author_id,
        data: { kind: 'room#0.0.1' },
        hash: member.room_hash,
        id: member.room_id,
        name: member.room_name,
        slug: member.room_slug,
      }}
    >
      <RoleContextProvider
        role={{
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
