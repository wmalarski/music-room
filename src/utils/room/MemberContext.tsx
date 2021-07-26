import React, { createContext, ReactNode, useContext } from "react";
import { Member } from "../../services/data/types";

const MemberContext = createContext<Member>({
  role_id: 0,
  author_id: 0,
  data: { kind: "room#0.0.1" },
  hash: "",
  name: "",
  profile_id: 0,
  role: "guest",
  room_id: 0,
  room_name: "",
  slug: "",
  user_id: "",
  avatar: null,
});

export const useMemberContext = (): Member => useContext(MemberContext);

export type MemberContextProviderProps = {
  children: ReactNode;
  member: Member;
};

export const MemberContextProvider = ({
  children,
  member,
}: MemberContextProviderProps): JSX.Element => (
  <MemberContext.Provider value={member}>{children}</MemberContext.Provider>
);

export default MemberContext;
