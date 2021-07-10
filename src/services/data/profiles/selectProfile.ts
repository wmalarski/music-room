import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Profile } from "../types";

export type SelectProfileArgs = {
  userId: string;
};

export type SelectProfileKey = ["profile", SelectProfileArgs];

export const selectProfileKey = (args: SelectProfileArgs): SelectProfileKey => [
  "profile",
  args,
];

export const selectProfile = async ({
  queryKey: [, { userId }],
}: QueryFunctionContext<SelectProfileKey>): Promise<Profile | null> => {
  const { data, error } = await supabase
    .from<Profile>("profiles")
    .select("id, name, user_id")
    .eq("user_id", userId)
    .single();

  if (error) throw error;

  return data;
};

export const useSelectProfile = (
  args: SelectProfileArgs,
  options?: UseQueryOptions<
    Profile | null,
    PostgrestError,
    Profile | null,
    SelectProfileKey
  >
): UseQueryResult<Profile | null, PostgrestError> =>
  useQuery(selectProfileKey(args), selectProfile, options);
