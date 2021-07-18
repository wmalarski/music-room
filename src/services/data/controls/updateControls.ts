import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { Controls } from "../types";
import { selectControlsKey } from "./selectControls";

export type ControlsVariables = Partial<Omit<Controls, "id" | "room_id">>;

export type UpdateControlsArgs = Pick<Controls, "id"> & ControlsVariables;

export type UpdateControlsContext = {
  previous?: Controls;
  next?: Partial<Controls>;
};

export const updateControls = async (
  args: UpdateControlsArgs
): Promise<Controls> => {
  const { data, error } = await supabase
    .from<Controls>("controls")
    .update(args)
    .eq("id", args.id)
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
    "onMutate"
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
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(selectKey, context?.previous);
      options?.onError?.(err, newTodo, context);
    },
    onSettled: (...args) => {
      queryClient.invalidateQueries(selectKey);
      options?.onSettled?.(...args);
    },
  });
};
