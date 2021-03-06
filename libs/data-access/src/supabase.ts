import { createClient } from '@supabase/supabase-js';
import { TableMapping } from './data/types';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
);

export const AUTH_ENDPOINT = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1`;

export const SUPABASE_ENDPOINT = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`;

export enum SupabaseErrorCode {
  UniquenessViolation = '23505',
}

export const TABLES: Record<keyof TableMapping, string> = {
  actions: 'actions',
  controls: 'controls',
  members: 'members',
  messages: 'messages',
  profiles: 'profiles',
  roles: 'roles',
  rooms: 'rooms',
};

export const TABLES_ENDPOINTS = Object.entries(TABLES).reduce(
  (prev, [key, value]) => {
    prev[key as keyof TableMapping] = `${SUPABASE_ENDPOINT}/${value}`;
    return prev;
  },
  {} as Record<keyof TableMapping, string>
);
