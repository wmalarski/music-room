import { PostgrestError, User } from '@supabase/supabase-js';
import {
  Action,
  Controls,
  Member,
  Message,
  Profile,
  ResponseError,
  Role,
  Room,
} from '../data/types';

export const defaultUser: User = {
  app_metadata: { provider: 'email' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
  id: 'qwertyuiop',
  user_metadata: {},
  role: 'authenticated',
  email: 'example@example.com',
};

export const defaultAction: Action = {
  created_at: new Date().toISOString(),
  dislike_at: null,
  id: 1,
  like_at: null,
  message_id: 1,
  profile_id: 1,
  updated_at: new Date().toISOString(),
};

export const defaultProfile: Profile = {
  avatar: null,
  id: 1,
  name: 'Name',
  user_id: 'user_id',
};

export const defaultMember: Member = {
  id: 1,
  room_author_id: 1,
  room_hash: 'qwertyuiop',
  profile_id: 1,
  room_id: 1,
  room_name: 'FirstRoom',
  user_id: '',
  profile_name: 'First',
  room_slug: 'first',
  role: 'user',
  room_avatar: null,
  profile_avatar: null,
};

export const defaultRoom: Room = {
  author_id: 1,
  data: { kind: 'room#0.0.1' },
  hash: 'qwertyuiop',
  id: 1,
  name: 'Room',
  slug: 'room',
};

export const defaultRole: Role = {
  id: 1,
  profile_id: 1,
  role: 'user',
  room_id: 1,
};

export const defaultMessage: Message = {
  created_at: new Date().toLocaleTimeString(),
  data: { kind: 'message#0.0.1', url: 'dQw4w9WgXcQ' },
  id: 1,
  profile_id: 1,
  room_id: 1,
};

export const defaultControls: Controls = {
  id: 1,
  muted: false,
  pause: false,
  room_id: 1,
  speaker_id: 1,
  volume: 0,
  change_by: 1,
};

export const defaultError: ResponseError = {
  error: 'Not found',
  error_description: 'Not found',
};

export const defaultPostgrestError: PostgrestError = {
  code: '2137',
  details: 'Default error',
  hint: 'Ignore',
  message: 'Important mock message',
};
