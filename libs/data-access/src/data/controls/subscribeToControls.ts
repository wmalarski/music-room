import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { supabase } from '../../supabase';
import { Controls } from '../types';
import { selectControlsKey } from './selectControls';

export type SubscribeToControlsArgs = {
  roomId: number;
  profileId: number;
};

export const useSubscribeToControls = ({
  roomId,
  profileId,
}: SubscribeToControlsArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscription = supabase
      .from<Controls>(`controls:room_id=eq.${roomId}`)
      .on('*', ({ new: newControls = null }) => {
        if (!newControls) return;
        if (newControls.change_by === profileId) return;
        queryClient.setQueryData<Controls | null>(
          selectControlsKey({ roomId }),
          newControls
        );
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [profileId, queryClient, roomId]);
};
