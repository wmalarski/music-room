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
  const middleCount = Math.ceil(limit / 2);

  const firstVirtualItem = items.at(0);
  const lastVirtualItem = items.at(-1);

  if (!firstVirtualItem || !lastVirtualItem) {
    return start;
  }

  const first = firstVirtualItem.index;
  const last = lastVirtualItem.index;

  if (first < start) {
    const lowerStart = Math.floor((first - middleCount) / overscan) * overscan;
    return Math.max(lowerStart, 0);
  } else if (last > start + limit) {
    const upperStart = Math.ceil((last - middleCount) / overscan) * overscan;
    return Math.max(upperStart, 0);
  }

  return start;
};

export const useVirtualPages = <T>({
  size,
  start,
  limit = 20,
  overscan,
  onPageChange,
  ...args
}: Options<T> & {
  start: number;
  limit?: number;
  overscan: number;
  onPageChange: (offset: number) => void;
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
    (offset: number) => onPageChange(offset),
    500
  );

  useEffect(() => {
    if (neededStart === start) return;
    debouncedPageChange(neededStart);
  }, [debouncedPageChange, neededStart, start]);

  return virtualizer;
};
