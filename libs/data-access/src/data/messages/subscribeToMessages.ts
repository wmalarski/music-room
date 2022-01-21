import { useEffect } from 'react';
import { InfiniteData, useQueryClient } from 'react-query';
import { supabase } from '../../supabase';
import { Message } from '../types';
import { selectCurrentMessageKey } from './selectCurrentMessage';
import { selectMessagesKey } from './selectMessages';

export type SubscribeToMessageArgs = {
  roomId: number;
  offset: number;
  limit: number;
  profileId: number;
};

export const useSubscribeToMessages = ({
  roomId,
  offset,
  limit,
  profileId,
}: SubscribeToMessageArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscription = supabase
      .from<Message>(`messages:room_id=eq.${roomId}`)
      .on('*', (payload) => {
        if (
          payload.new.profile_id === profileId ||
          payload.old.profile_id === profileId
        )
          return;
        queryClient.invalidateQueries(selectCurrentMessageKey({ roomId }));
        queryClient.invalidateQueries<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId, limit, offset })
        );
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [limit, offset, profileId, queryClient, roomId]);
};
