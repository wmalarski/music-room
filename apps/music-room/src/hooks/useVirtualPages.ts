import { useEffect } from 'react';
import { Options, useVirtual, VirtualItem } from 'react-virtual';
import { useCallbackRef } from './useCallbackRef';

type GetScrollStartArgs = {
  items: VirtualItem[];
  limit: number;
};

const getScrollStart = ({ items, limit }: GetScrollStartArgs): number => {
  const half = Math.floor(limit / 2);

  const firstVirtualItem = items.at(0);

  if (!firstVirtualItem) return 0;

  const first = firstVirtualItem.index;
  return Math.floor(first / half) * half;
};

export type UseVirtualPagesArgs<T> = Options<T> & {
  start: number;
  limit: number;
  onOffsetChange: (offset: number) => void;
};

export const useVirtualPages = <T>({
  size,
  start,
  limit,
  overscan,
  onOffsetChange,
  ...args
}: UseVirtualPagesArgs<T>): ReturnType<typeof useVirtual> => {
  const changeOffsetRef = useCallbackRef((offset: number) =>
    onOffsetChange(offset)
  );

  const virtualizer = useVirtual({
    size,
    overscan,
    ...args,
  });

  const neededStart = getScrollStart({
    items: virtualizer.virtualItems,
    limit,
  });

  useEffect(() => {
    if (neededStart === start) return;
    changeOffsetRef(neededStart);
  }, [changeOffsetRef, neededStart, start]);

  return virtualizer;
};
