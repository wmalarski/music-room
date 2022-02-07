import { useEffect } from 'react';
import { Options, useVirtual, VirtualItem } from 'react-virtual';
import { useCallbackRef } from './useCallbackRef';

type GetOffsetForIndexArgs = {
  limit: number;
  index?: number;
};

export const getOffsetForIndex = ({
  limit,
  index,
}: GetOffsetForIndexArgs): number => {
  if (!index) return 0;
  const half = Math.floor(limit / 2);
  return Math.floor(index / half) * half;
};

type GetOffsetsForIndexArgs = {
  limit: number;
  index?: number;
};

export const getOffsetsForIndex = ({
  limit,
  index,
}: GetOffsetsForIndexArgs): number[] => {
  if (!index) return [0];
  const half = Math.floor(limit / 2);
  const offset = getOffsetForIndex({ index, limit });

  if (offset < half) return [offset];
  return [offset - half, offset];
};

type GetScrollStartArgs = {
  items: VirtualItem[];
  limit: number;
};

const getScrollStart = ({ items, limit }: GetScrollStartArgs): number => {
  const firstVirtualItem = items.at(0);
  if (!firstVirtualItem) return 0;

  const first = firstVirtualItem.index;
  return getOffsetForIndex({ index: first, limit });
};

type UseVirtualPagesArgs<T> = Options<T> & {
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
