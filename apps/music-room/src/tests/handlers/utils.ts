import { RestRequest } from 'msw';

export const getEqParam = (
  req: RestRequest<never, never>,
  key: string
): string | undefined => {
  const value = req.url.searchParams.get(key);
  const [, id] = (value ?? '').split('.');
  return id;
};
