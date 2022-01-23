import { Member, TABLES_ENDPOINTS } from '@music-room/data-access';
import { DefaultRequestBody, rest } from 'msw';

export const mockMembersStorage = {
  getContext: (): Member | null => {
    const member = sessionStorage.getItem('member');
    if (!member) return null;
    return JSON.parse(member);
  },
  setContext: (member: Member): void => {
    return sessionStorage.setItem('member', JSON.stringify(member));
  },
  get: (): Member[] => {
    return JSON.parse(sessionStorage.getItem('members') ?? '[]');
  },
  set: (actions: Member[]): void => {
    return sessionStorage.setItem('members', JSON.stringify(actions));
  },
};

export const membersHandlers = [
  rest.get<DefaultRequestBody, { limit: string }, Member[]>(
    TABLES_ENDPOINTS.members,
    (req, res, ctx) => {
      return res(
        ctx.json(mockMembersStorage.get().slice(0, Number(req.params.limit)))
      );
    }
  ),
];
