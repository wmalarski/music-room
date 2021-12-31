export const translation = {
  // Auth
  signInHeader: 'Sign In',
  signInButton: 'Sign In',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  confirmPasswordPlaceholder: 'Confirm Password',
  fieldIsDifferent: 'Repeat password',
  errorMaxLength: (max: number): string => `Max ${max}`,
  signOutButton: 'Sign Out',
  signUpHeader: 'Sign Up',
  signUpButton: 'Sign Up',

  // Header
  headerHome: 'Music Rooms',

  // Room
  addMessage: 'Add message',
  addUrlPlaceholder: 'Url',
  loadMoreMessages: 'Load More',
  addRoom: 'Add Room',
  fieldIsRequired: 'Field is required',
  errorMinLength: (min: number): string => `Min ${min}`,
  slugPatternIsRequired: 'Use [A-Za-z0-9]+',
  roomNamePlaceholder: 'Name',
  roomSlugPlaceholder: 'Slug',
  removeRoom: 'Remove Room',
  confirmRemoveRoom: 'Confirm',
  inviteToRoom: (roomName: string): string => `Welcome to ${roomName}`,
  acceptInvitation: 'Accept',
  controlsMute: 'Mute',
  controlsPause: 'Pause',
  controlsVolume: 'Volume',
  controlsAssignSpeaker: 'Assign Speaker',
  endMessage: 'End Message',
  profileHeader: 'Edit Profile',
  profileNamePlaceholder: 'Name',
  profileAvatarPlaceholder: 'Avatar',
  profileSaveButton: 'Save',
  navigationProfile: 'Profile',
  likeMessage: 'Like',
  removeLikeMessage: 'Remove Like',
  dislikeMessage: 'Dislike',
  removeDislikeMessage: 'Remove Dislike',
  navigationRoom: 'Room',
  navigationSettings: 'Settings',
  roomLink: (roomName: string): string => `Go to ${roomName}`,
  updateRoom: 'Update Room',
  removeFromRoom: 'Remove from group',
  loadMoreUsers: 'Load more',
  modRole: 'Mod',
  userRole: 'User',
  guestRole: 'Guest',
};

export type Translation = typeof translation;

export type Language = 'default';

const translations: Record<Language, Translation> = {
  default: translation,
};

export default translations;
