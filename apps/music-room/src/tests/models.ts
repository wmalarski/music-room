import { factory, nullable, oneOf, primaryKey } from '@mswjs/data';
import { Entity, Value } from '@mswjs/data/lib/glossary';
import {
  defaultMember,
  defaultRole,
  defaultRoom,
  defaultUser,
  Member,
  Profile,
  Role,
  Room,
  RoomRole,
} from '@music-room/data-access';
import { User } from '@supabase/supabase-js';

export const dbIndexCounter = (() => {
  let index = 1;
  return () => {
    const result = index;
    index += 1;
    return result;
  };
})();

const directory = {
  user: {
    id: primaryKey(String),
    email: String,
  },
  action: {
    id: primaryKey(dbIndexCounter),
    profile_id: oneOf('profile'),
    message_id: oneOf('message'),
    created_at: String,
    updated_at: String,
    like_at: nullable(String),
    dislike_at: nullable(String),
  },
  controls: {
    id: primaryKey(dbIndexCounter),
    room_id: oneOf('room'),
    muted: Boolean,
    volume: Number,
    pause: Boolean,
    speaker_id: oneOf('profile'),
    change_by: oneOf('profile'),
  },
  message: {
    id: primaryKey(dbIndexCounter),
    profile_id: oneOf('profile'),
    room_id: oneOf('room'),
    created_at: String,
    ended_at: nullable(String),
    data: {
      kind: String,
      url: String,
    },
  },
  profile: {
    id: primaryKey(dbIndexCounter),
    name: String,
    user_id: oneOf('user', { nullable: false }),
    avatar: nullable(String),
  },
  role: {
    id: primaryKey(dbIndexCounter),
    profile_id: oneOf('profile'),
    room_id: oneOf('room'),
    role: String,
  },
  room: {
    id: primaryKey(dbIndexCounter),
    author_id: oneOf('profile'),
    name: String,
    slug: String,
    data: {
      kind: String,
    },
    hash: String,
  },
};

export type MockEntity<Key extends keyof typeof directory> = Entity<
  typeof directory,
  Key
>;

export type MockValue<Key extends keyof typeof directory> = Value<
  MockEntity<Key>,
  typeof directory
>;

export const mockDb = factory(directory);

export const convert = {
  toProfile: (entity?: MockValue<'profile'> | null): Profile | undefined => {
    if (!entity || !entity.user_id) return undefined;
    return {
      avatar: entity.avatar,
      id: entity.id,
      name: entity.name,
      user_id: entity.user_id.id,
    };
  },
  toUser: (
    entity?: MockValue<'user'> | MockValue<'profile'>['user_id'] | null
  ): User | undefined => {
    if (!entity) return undefined;
    return {
      ...defaultUser,
      id: entity.id,
      email: entity.email,
    };
  },
  toMember: (entity?: MockValue<'role'> | null): Member | undefined => {
    if (!entity || !entity.profile_id?.user_id || !entity.room_id?.author_id)
      return undefined;
    return {
      ...defaultMember,
      id: entity.id,
      profile_avatar: entity.profile_id.avatar,
      profile_id: entity.profile_id.id,
      user_id: entity.profile_id.user_id.id,
      profile_name: entity.profile_id.name,
      role: entity.role as RoomRole,
      room_author_id: entity.room_id?.author_id?.id,
      room_hash: entity.room_id.hash,
      room_id: entity.room_id.id,
      room_name: entity.room_id.name,
      room_slug: entity.room_id.slug,
    };
  },
  toRole: (entity?: MockValue<'role'> | null): Role | undefined => {
    if (!entity || !entity.profile_id || !entity.room_id) return undefined;
    return {
      ...defaultRole,
      id: entity.id,
      profile_id: entity.profile_id.id,
      role: entity.role as RoomRole,
      room_id: entity.room_id.id,
    };
  },
  toRoom: (entity?: MockValue<'room'> | null): Room | undefined => {
    if (!entity || !entity.author_id) return undefined;
    return {
      ...defaultRoom,
      id: entity.id,
      author_id: entity.author_id.id,
      hash: entity.hash,
      name: entity.name,
      slug: entity.slug,
    };
  },
};
