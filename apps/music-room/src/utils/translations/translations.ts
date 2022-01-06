export const translation = {
  // Common
  fieldIsRequired: 'Field is required',
  errorMaxLength: 'Max:',
  errorMinLength: 'Min:',

  // Auth
  signInHeader: 'Sign In',
  signInButton: 'Sign In',
  emailPlaceholder: 'Email',
  passwordPlaceholder: 'Password',
  confirmPasswordPlaceholder: 'Confirm Password',
  fieldIsDifferent: 'Repeat password',
  signOutButton: 'Sign Out',
  signUpHeader: 'Sign Up',
  signUpButton: 'Sign Up',

  // Headers
  headerHome: 'Music Rooms',
  navigationProfile: 'Profile',
  navigationRoom: 'Room',
  navigationSettings: 'Settings',

  // Home
  addRoom: 'Add Room',
  slugPatternIsRequired: 'Use [A-Za-z0-9]+',
  roomNamePlaceholder: 'Name',
  roomSlugPlaceholder: 'Slug',

  // Invite
  inviteToRoom: 'Welcome to',
  acceptInvitation: 'Accept',

  // Profile
  profileHeader: 'Edit Profile',
  profileNamePlaceholder: 'Name',
  profileSaveButton: 'Save',

  // Room
  addMessage: 'Add message',
  addUrlPlaceholder: 'Url',
  controlsMute: 'Mute',
  controlsPause: 'Pause',
  controlsVolume: 'Volume',
  controlsAssignSpeaker: 'Assign Speaker',
  likeMessage: 'Like',
  removeLikeMessage: 'Remove Like',
  dislikeMessage: 'Dislike',
  removeDislikeMessage: 'Remove Dislike',

  // Settings
  removeRoom: 'Remove Room',
  confirmRemoveRoom: 'Confirm',
  updateRoom: 'Update Room',
  removeFromRoom: 'Remove from group',
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
