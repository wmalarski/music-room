import { factory, nullable, oneOf, primaryKey } from '@mswjs/data';
import { Entity } from '@mswjs/data/lib/glossary';
import {
  Action,
  Controls,
  defaultAction,
  defaultControls,
  defaultMember,
  defaultMessage,
  defaultRole,
  defaultRoom,
  defaultUser,
  Member,
  Message,
  MessageData,
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
  profile: {
    id: primaryKey(dbIndexCounter),
    name: String,
    user_id: oneOf('user', { nullable: false }),
    avatar: nullable(String),
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
  role: {
    id: primaryKey(dbIndexCounter),
    profile_id: oneOf('profile'),
    room_id: oneOf('room'),
    role: String,
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
  action: {
    id: primaryKey(dbIndexCounter),
    profile_id: oneOf('profile'),
    message_id: oneOf('message'),
    created_at: String,
    updated_at: String,
    like_at: nullable(String),
    dislike_at: nullable(String),
  },
};

export type MockEntity<Key extends keyof typeof directory> = Entity<
  typeof directory,
  Key
>;

export const mockDb = factory(directory);

export const convert = {
  toProfile: (entity?: MockEntity<'profile'> | null): Profile | undefined => {
    if (!entity || !entity.user_id) return undefined;
    return {
      avatar: entity.avatar,
      id: entity.id,
      name: entity.name,
      user_id: entity.user_id.id,
    };
  },
  toUser: (
    entity?: MockEntity<'user'> | MockEntity<'profile'>['user_id'] | null
  ): User | undefined => {
    if (!entity) return undefined;
    return {
      ...defaultUser,
      id: entity.id,
      email: entity.email,
    };
  },
  toMember: (entity?: MockEntity<'role'> | null): Member | undefined => {
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
  toRole: (entity?: MockEntity<'role'> | null): Role | undefined => {
    if (!entity || !entity.profile_id || !entity.room_id) return undefined;
    return {
      ...defaultRole,
      id: entity.id,
      profile_id: entity.profile_id.id,
      role: entity.role as RoomRole,
      room_id: entity.room_id.id,
    };
  },
  toRoom: (entity?: MockEntity<'room'> | null): Room | undefined => {
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
  toAction: (entity?: MockEntity<'action'> | null): Action | undefined => {
    if (!entity || !entity.message_id || !entity.profile_id) return undefined;
    return {
      ...defaultAction,
      created_at: entity.created_at,
      dislike_at: entity.dislike_at,
      id: entity.id,
      like_at: entity.like_at,
      message_id: entity.message_id.id,
      profile_id: entity.profile_id.id,
      updated_at: entity.updated_at,
    };
  },
  toMessage: (entity?: MockEntity<'message'> | null): Message | undefined => {
    if (!entity || !entity.room_id || !entity.profile_id) return undefined;
    return {
      ...defaultMessage,
      created_at: entity.created_at,
      id: entity.id,
      profile_id: entity.profile_id.id,
      data: entity.data as MessageData,
      ended_at: entity.ended_at ?? undefined,
      room_id: entity.room_id.id,
    };
  },
  toControls: (
    entity?: MockEntity<'controls'> | null
  ): Controls | undefined => {
    if (!entity || !entity.room_id || !entity.change_by || !entity.speaker_id)
      return undefined;
    return {
      ...defaultControls,
      change_by: entity.change_by.id,
      id: entity.id,
      muted: entity.muted,
      pause: entity.pause,
      room_id: entity.room_id.id,
      speaker_id: entity.speaker_id?.id,
      volume: entity.volume,
    };
  },
};
