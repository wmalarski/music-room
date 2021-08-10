const paths = {
  home: "/",
  profile: "/profile",
  room: (slug: string): string => `/room/${slug}`,
  roomSettings: (slug: string): string => `/room/${slug}/settings`,
  invite: (hash: string): string => `invite/${hash}`,
};

export default paths;
