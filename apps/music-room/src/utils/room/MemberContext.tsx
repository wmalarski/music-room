import { createContext, ReactElement, ReactNode, useContext } from 'react';
import { Member } from '../../services/data/types';

const MemberContext = createContext<Member>({
  id: 0,
  room_author_id: 0,
  room_hash: '',
  profile_name: '',
  profile_id: 0,
  role: 'guest',
  room_id: 0,
  room_name: '',
  room_slug: '',
  user_id: '',
  room_avatar: null,
  profile_avatar: null,
});

export const useMemberContext = (): Member => useContext(MemberContext);

type Props = {
  children: ReactNode;
  member: Member;
};

export const MemberContextProvider = ({
  children,
  member,
}: Props): ReactElement => (
  <MemberContext.Provider value={member}>{children}</MemberContext.Provider>
);

export default MemberContext;
