const translation = {
  addMessage: "Add message",
  addUrlPlaceholder: "Url",
  loadMoreMessages: "Load More",
  addRoom: "Add Room",
  roomNamePlaceholder: "Name",
  removeRoom: "Remove Room",
  confirmRemoveRoom: "Confirm",
  inviteToRoom: (roomName: string): string => `Welcome to ${roomName}`,
  acceptInvitation: "Accept",
  navigationHome: "Home",
  controlsMute: "Mute",
  controlsPause: "Pause",
  controlsVolume: "Volume",
  controlsAssignSpeaker: "Assign Speaker",
  endMessage: "End Message",
  profileHeader: "Edit Profile",
  profileNamePlaceholder: "Name",
  profileAvatarPlaceholder: "Avatar",
  profileSaveButton: "Save",
  navigationProfile: "Profile",
  likeMessage: "Like",
  removeLikeMessage: "Remove Like",
  dislikeMessage: "Dislike",
  removeDislikeMessage: "Remove Dislike",
  navigationRoom: "Room",
  navigationSettings: "Settings",
  roomLink: (roomName: string): string => `Go to ${roomName}`,
  updateRoom: "Update Room",
  removeFromRoom: "Remove from group",
  loadMoreUsers: "Load more",
  modRole: "Mod",
  userRole: "User",
  guestRole: "Guest",
  signInHeader: "Sign In",
  signInButton: "Sign In",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  confirmPasswordPlaceholder: "Confirm Password",
  signOutButton: "Sign Out",
  signUpHeader: "Sign Up",
  signUpButton: "Sign Up",
};

export type Translation = typeof translation;

export type Language = "default";

const translations: Record<Language, Translation> = {
  default: translation,
};

export default translations;
