import { InfiniteData } from "react-query";
import { Message } from "../types";

export const insertCacheMessage =
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

export const updateCacheMessage =
  (message: Partial<Message>) =>
  (data?: InfiniteData<Message[]>): InfiniteData<Message[]> => ({
    pages: (data?.pages ?? []).map((page) =>
      page.map((msg) => (msg.id === message.id ? { ...msg, ...message } : msg))
    ),
    pageParams: data?.pageParams ?? [],
  });

export const deleteCacheMessage =
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
