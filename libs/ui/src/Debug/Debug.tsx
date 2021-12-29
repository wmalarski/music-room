import { ReactElement } from 'react';

type Props<T> = {
  value: T;
};

export function Debug<T>({ value }: Props<T>): ReactElement | null {
  return process.env.NODE_ENV === 'development' ? (
    <pre>{JSON.stringify(value, null, 2)}</pre>
  ) : null;
}
