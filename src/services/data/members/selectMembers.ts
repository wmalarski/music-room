import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Member } from "../types";

const MEMBERS_PAGE_LIMIT = 20;

export type SelectMembersArgs = Partial<Member>;

export type SelectMembersKey = ["members", SelectMembersArgs];

export const selectAllMembersKey = (): QueryKey => ["members"];

export const selectMembersKey = (args: SelectMembersArgs): SelectMembersKey => [
  "members",
  args,
];

export const selectMembers = async ({
  queryKey: [, args],
  pageParam = 0,
}: QueryFunctionContext<SelectMembersKey>): Promise<Member[]> => {
  const { data, error } = await Object.entries(args).reduce(
    (prev, [key, value]) => prev.eq(key as keyof Member, value),
    supabase
      .from<Member>("room_roles")
      .select("*")
      .range(pageParam, pageParam + MEMBERS_PAGE_LIMIT)
  );

  if (error || !data) throw error;

  return data;
};

export const useSelectMembers = (
  args: SelectMembersArgs,
  options?: UseInfiniteQueryOptions<
    Member[],
    PostgrestError,
    Member[],
    Member[],
    SelectMembersKey
  >
): UseInfiniteQueryResult<Member[], PostgrestError> =>
  useInfiniteQuery(selectMembersKey(args), selectMembers, options);
