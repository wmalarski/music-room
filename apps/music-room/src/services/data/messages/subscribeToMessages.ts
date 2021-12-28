import { useEffect } from "react";
import { InfiniteData, useQueryClient } from "react-query";
import fromSupabase from "../../utils/fromSupabase";
import { Message } from "../types";
import {
  deleteCacheMessage,
  insertCacheMessage,
  updateCacheMessage,
} from "./cacheUtils";
import { selectCurrentMessageKey } from "./selectCurrentMessage";
import { selectMessagesKey } from "./selectMessages";

export type SubscribeToMessageArgs = {
  roomId: number;
};

export const useSubscribeToMessages = ({
  roomId,
}: SubscribeToMessageArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscription = fromSupabase("messages")
      .on("INSERT", ({ new: message }) =>
        queryClient.setQueryData<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId }),
          insertCacheMessage(message)
        )
      )
      .on("UPDATE", ({ new: message }) => {
        queryClient.invalidateQueries(
          selectCurrentMessageKey({ roomId: message.room_id })
        );
        queryClient.setQueryData<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId }),
          updateCacheMessage(message)
        );
      })
      .on("DELETE", (payload) =>
        queryClient.setQueryData<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId }),
          deleteCacheMessage(payload.old.id)
        )
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient, roomId]);
};
