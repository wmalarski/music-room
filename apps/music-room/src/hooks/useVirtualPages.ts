import { useEffect } from 'react';
import { Options, useVirtual, VirtualItem } from 'react-virtual';
import { useDebounce } from './useDebounce';

type GetScrollStartArgs = {
  start: number;
  items: VirtualItem[];
  limit: number;
  overscan: number;
};

const getScrollStart = ({
  start,
  items,
  limit,
  overscan,
}: GetScrollStartArgs): number => {
  const end = start + limit;
  const half = Math.ceil(limit / 2);

  const firstVirtualItem = items.at(0);
  const lastVirtualItem = items.at(-1);

  if (!firstVirtualItem || !lastVirtualItem) {
    return start;
  }

  const first = firstVirtualItem.index;
  const last = lastVirtualItem.index;
  const middle = (last + first) / 2;

  if (first < start) {
    return Math.max(Math.floor((middle - half) / half) * half, 0);
  } else if (last > end) {
    return Math.max(Math.ceil((middle - half) / half) * half, 0);
  }
  return start;
};

export const useVirtualPages = <T>({
  size,
  start,
  limit = 20,
  overscan,
  onOffsetChange,
  ...args
}: Options<T> & {
  start: number;
  limit?: number;
  overscan: number;
  onOffsetChange: (offset: number) => void;
}): ReturnType<typeof useVirtual> => {
  const virtualizer = useVirtual({
    size,
    overscan,
    ...args,
  });

  const neededStart = getScrollStart({
    items: virtualizer.virtualItems,
    limit,
    overscan,
    start,
  });

  const debouncedPageChange = useDebounce(
    (offset: number) => onOffsetChange(offset),
    500
  );

  useEffect(() => {
    if (neededStart === start) return;
    debouncedPageChange(neededStart);
  }, [debouncedPageChange, neededStart, start]);

  return virtualizer;
};
