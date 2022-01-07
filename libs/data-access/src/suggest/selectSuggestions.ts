import { PostgrestError } from '@supabase/supabase-js';
import fetch from 'cross-fetch';
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';

const SUGGESTIONS_ENDPOINT =
  'https://suggestqueries.google.com/complete/search';

export type SelectSuggestionsArgs = {
  query: string;
};

export type SelectSuggestionsKey = ['suggestions', SelectSuggestionsArgs];

export const selectSuggestionsKey = (
  args: SelectSuggestionsArgs
): SelectSuggestionsKey => ['suggestions', args];

export const selectSuggestions = async ({
  queryKey: [, { query }],
}: QueryFunctionContext<SelectSuggestionsKey>): Promise<unknown> => {
  const params = new URLSearchParams({
    client: 'youtube',
    hl: 'en',
    ds: 'yt',
    query,
  });
  const url = `${SUGGESTIONS_ENDPOINT}?${params}`;
  const response = await fetch(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  // const { data, error } = await Object.entries(args).reduce(
  //   (prev, [key, value]) => prev.eq(key as keyof Room, value),
  //   supabase.from<Room>("rooms").select("*")
  // );
  const text = response.text();

  console.log('suggestions', text, url);

  return text;
};

export const useSelectSuggestions = (
  args: SelectSuggestionsArgs,
  options?: UseQueryOptions<
    unknown,
    PostgrestError,
    unknown,
    SelectSuggestionsKey
  >
): UseQueryResult<unknown, PostgrestError> => {
  return useQuery(selectSuggestionsKey(args), selectSuggestions, options);
};
