import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { supabase } from "../../supabase";
import { Controls } from "../types";
import { selectControlsKey } from "./selectControls";

export type SubscribeToControlsArgs = {
  roomId: number;
};

export const useSubscribeToControls = ({
  roomId,
}: SubscribeToControlsArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscription = supabase
      .from<Controls>("controls")
      .on("*", ({ new: newControls = null }) =>
        queryClient.setQueryData<Controls | null>(
          selectControlsKey({ roomId }),
          () => newControls
        )
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient, roomId]);
};
