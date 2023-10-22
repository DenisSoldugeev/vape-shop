import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import Google from 'next-auth/providers/google';
import * as process from 'process';
import Credentials from 'next-auth/providers/credentials';
import { Users } from 'utils/users';

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = Users.find((user) => user.email === credentials.email);
        if (user && user?.password == credentials?.password) {
          return user;
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
