import { PostgrestError } from '@supabase/supabase-js';
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import fromSupabase from '../../utils/fromSupabase';
import { Controls } from '../types';
import { selectControlsKey } from './selectControls';

export type UpdateControlsArgs = Partial<Omit<Controls, 'room_id'>> &
  Pick<Controls, 'id' | 'change_by'>;

export type UpdateControlsContext = {
  previous?: Controls;
  next?: Partial<Controls>;
};

export const updateControls = async (
  args: UpdateControlsArgs
): Promise<Controls> => {
  const { data, error } = await fromSupabase('controls')
    .update(args)
    .eq('id', args.id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateControls = (
  roomId: number,
  options?: Omit<
    UseMutationOptions<
      Controls,
      PostgrestError,
      UpdateControlsArgs,
      UpdateControlsContext
    >,
    'onMutate'
  >
): UseMutationResult<
  Controls,
  PostgrestError,
  UpdateControlsArgs,
  UpdateControlsContext
> => {
  const queryClient = useQueryClient();
  const selectKey = selectControlsKey({ roomId });

  return useMutation(updateControls, {
    ...options,
    onMutate: async (controls) => {
      await queryClient.cancelQueries(selectKey);

      const previous = queryClient.getQueryData<Controls>(selectKey);
      const next = { ...previous, ...controls };

      queryClient.setQueryData(selectKey, next);

      return { previous, next };
    },
    onError: (err, controls, context) => {
      queryClient.setQueryData(selectKey, context?.previous);
      options?.onError?.(err, controls, context);
    },
    onSettled: (...args) => {
      queryClient.invalidateQueries(selectKey);
      options?.onSettled?.(...args);
    },
  });
};
