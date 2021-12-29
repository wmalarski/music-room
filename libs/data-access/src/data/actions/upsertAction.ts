import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Action } from "../types";
import { selectActionKey } from "./selectAction";

export type UpsertActionArgs = {
  id?: number;
  profile_id: number;
  message_id: number;
  like_at?: string | null;
  dislike_at?: string | null;
};

export type UpsertActionContext = {
  previous?: Action;
  next?: Partial<Action>;
};

export const upsertAction = async (args: UpsertActionArgs): Promise<Action> => {
  const { data, error } = await fromSupabase("actions").upsert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useUpsertAction = (
  options?: Omit<
    UseMutationOptions<
      Action,
      PostgrestError,
      UpsertActionArgs,
      UpsertActionContext
    >,
    "onMutate"
  >
): UseMutationResult<
  Action,
  PostgrestError,
  UpsertActionArgs,
  UpsertActionContext
> => {
  const queryClient = useQueryClient();

  return useMutation(upsertAction, {
    ...options,
    onMutate: async (action) => {
      const selectKey = selectActionKey({
        messageId: action.message_id,
        profileId: action.profile_id,
      });

      await queryClient.cancelQueries(selectKey);

      const previous = queryClient.getQueryData<Action>(selectKey);
      const next = { ...previous, ...action };

      queryClient.setQueryData(selectKey, next);

      return { previous, next };
    },
    onError: (err, action, context) => {
      const selectKey = selectActionKey({
        messageId: action.message_id,
        profileId: action.profile_id,
      });

      queryClient.setQueryData(selectKey, context?.previous);
      options?.onError?.(err, action, context);
    },
    onSettled: (action, ...args) => {
      options?.onSettled?.(action, ...args);
      if (!action) return;

      const selectKey = selectActionKey({
        messageId: action?.message_id,
        profileId: action?.profile_id,
      });
      queryClient.invalidateQueries(selectKey);
    },
  });
};
