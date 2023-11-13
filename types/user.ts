export type User = {
  name: string;
  email: string;
  image?: string;
};

export type UserHookResult = {
  user: User | null;
  isAuthenticated: boolean;
};
