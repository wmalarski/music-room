import { Dispatch, SetStateAction, useState } from 'react';
import { useDebounce } from './useDebounce';

export const useDebouncedState = <S>(
  init: S | (() => S),
  delay: number
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState(init);

  const debouncedSetState = useDebounce((value: S | ((s: S) => S)) => {
    setState(value);
  }, delay);

  return [state, debouncedSetState];
};
