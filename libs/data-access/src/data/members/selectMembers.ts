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

const MEMBERS_PAGE_LIMIT = 20;

export type SelectMembersArgs = Partial<Member> & { offset: number };

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
  queryKey: [, { offset, ...args }],
}: QueryFunctionContext<
  SelectMembersKey,
  number
>): Promise<SelectMembersResult> => {
  const { data, error, count } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof Member, value),
    fromSupabase('members')
      .select('*', { count: 'estimated' })
      .range(offset, offset + MEMBERS_PAGE_LIMIT)
  );

  if (error || !data) throw error;

  return {
    members: data,
    count: count ?? 0,
    limit: MEMBERS_PAGE_LIMIT,
    offset,
  };
};

export const useSelectMembers = (
  args: SelectMembersArgs,
  options?: UseQueryOptions<
    SelectMembersResult,
    PostgrestError,
    SelectMembersResult,
    SelectMembersKey
  >
): UseQueryResult<SelectMembersResult, PostgrestError> =>
  useQuery(selectMembersKey(args), selectMembers, options);
