import { server } from '@music-room/util-tests';
import '@testing-library/jest-dom';

beforeAll(() => {
  server.listen();
  sessionStorage.clear();
});
afterEach(() => {
  server.resetHandlers();
  sessionStorage.clear();
});
afterAll(() => server.close());
