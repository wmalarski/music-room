import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../../supabase";
import { Controls } from "../types";

export type ControlsVariables = Partial<Omit<Controls, "id" | "room_id">>;

export type UpdateControlsArgs = Pick<Controls, "id"> & ControlsVariables;

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
  options?: UseMutationOptions<Controls, PostgrestError, UpdateControlsArgs>
): UseMutationResult<Controls, PostgrestError, UpdateControlsArgs> =>
  useMutation(updateControls, options);
