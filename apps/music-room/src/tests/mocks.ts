import { useVirtual } from 'react-virtual';

type DefaultVirtualizerArgs = {
  totalLength: number;
  height: number;
  count: number;
  update?: Partial<ReturnType<typeof useVirtual>>;
};

export const defaultVirtualizer = ({
  count,
  height,
  totalLength,
  update,
}: DefaultVirtualizerArgs): ReturnType<typeof useVirtual> => {
  return {
    measure: () => void 0,
    scrollToIndex: () => void 0,
    scrollToOffset: () => void 0,
    totalSize: height * totalLength,
    virtualItems: Array(count)
      .fill(null)
      .map((_, index) => ({
        index,
        start: index * height,
        end: (index + 1) * height,
        key: `${index}`,
        measureRef: () => void 0,
        size: height,
      })),
    ...update,
  };
};
