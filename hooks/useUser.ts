import { useSession } from 'next-auth/react';
import { User, UserHookResult } from 'types/user';

const useUser = (): UserHookResult => {
  const { data: session } = useSession();
  const isAuthenticated = !!session;
  const user = session?.user as User | null;

  return { user, isAuthenticated };
};

export default useUser;
