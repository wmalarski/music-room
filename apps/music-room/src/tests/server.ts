import { setupServer } from 'msw/node';
import { profilesHandlers } from './handlers/profile';

export const server = setupServer(...profilesHandlers);
