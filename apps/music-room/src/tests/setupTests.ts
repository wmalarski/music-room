import '@testing-library/jest-dom';
import { server } from './server';

beforeAll(() => {
  server.listen();
  sessionStorage.clear();
});
afterEach(() => {
  server.resetHandlers();
  sessionStorage.clear();
});
afterAll(() => server.close());
