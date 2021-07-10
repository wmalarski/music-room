import { useEffect } from "react";
import { InfiniteData, useQueryClient } from "react-query";
import { supabase } from "../../supabase";
import { Message } from "../types";
import { selectMessagesKey } from "./selectMessages";

export type SubscribeToMessageArgs = {
  roomId: number;
};

const insertMessage =
  (message: Message) =>
  (data?: InfiniteData<Message[]>): InfiniteData<Message[]> => {
    const [firstPage, ...pages] = data?.pages ?? [[]];
    return {
      pages: [[message, ...firstPage], ...pages],
      pageParams: [data?.pageParams ?? []].map((start) =>
        Number.isInteger(start) ? Number(start) + 1 : start
      ),
    };
  };

const deleteMessage =
  (messageId: number) =>
  (data?: InfiniteData<Message[]>): InfiniteData<Message[]> => {
    const pages = (data?.pages ?? [[]]).map((page) =>
      page.filter((message) => message.id !== messageId)
    );
    const pageParams = pages
      ?.reduce((prev, curr) => [prev[0] + curr.length, ...prev], [0])
      .reverse()
      .slice(0, pages.length);

    return { pageParams, pages };
  };

export const useSubscribeToMessage = ({
  roomId,
}: SubscribeToMessageArgs): void => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const subscription = supabase
      .from<Message>("messages")
      .on("INSERT", ({ new: message }) =>
        queryClient.setQueryData<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId }),
          insertMessage(message)
        )
      )
      .on("DELETE", (payload) =>
        queryClient.setQueryData<InfiniteData<Message[]>>(
          selectMessagesKey({ roomId }),
          deleteMessage(payload.old.id)
        )
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [queryClient, roomId]);
};
