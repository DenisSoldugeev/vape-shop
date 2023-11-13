export type User = {
  name: string;
  email: string;
  image?: string;
};

export type UserHookResult = {
  user: User;
  isAuthenticated: boolean;
};

export type ChangesUserData = {
  name: string;
  email: string;
};
