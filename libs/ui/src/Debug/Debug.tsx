export type DebugProps<T> = {
  value: T;
};

export function Debug<T>({ value }: DebugProps<T>): JSX.Element | null {
  return process.env.NODE_ENV === 'development' ? (
    <pre>{JSON.stringify(value, null, 2)}</pre>
  ) : null;
}
