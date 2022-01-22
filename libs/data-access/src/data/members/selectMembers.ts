import { PostgrestError } from '@supabase/supabase-js';
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { Member } from '../types';

export type SelectMembersArgs = Partial<Member> & {
  offset: number;
  limit: number;
  query?: string;
};

export type SelectMembersKey = ['members', SelectMembersArgs];

export type SelectMembersResult = {
  members: Member[];
  count: number;
  offset: number;
  limit: number;
};

export const selectAllMembersKey = (): QueryKey => ['members'];

export const selectMembersKey = (args: SelectMembersArgs): SelectMembersKey => [
  'members',
  args,
];

export const selectMembers = async ({
  queryKey,
}: QueryFunctionContext<
  SelectMembersKey,
  number
>): Promise<SelectMembersResult> => {
  const [, { limit, offset, query, ...args }] = queryKey;

  const select = fromSupabase('members').select('*', { count: 'estimated' });
  const queried = query ? select.ilike('profile_name', query) : select;
  const range = queried.range(offset, offset + limit);

  const { data, error, count } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof Member, value),
    range
  );

  if (error || !data) throw error;

  return { members: data, count: count ?? 0, limit, offset };
};

export const useSelectMembers = (
  args: SelectMembersArgs,
  options?: UseQueryOptions<
    SelectMembersResult,
    PostgrestError,
    SelectMembersResult,
    SelectMembersKey
  >
): UseQueryResult<SelectMembersResult, PostgrestError> => {
  return useQuery(selectMembersKey(args), selectMembers, options);
};
