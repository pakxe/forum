import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '1491e3da367a955e65e0',
      clientSecret: '4653d9637e812711c36408a36be16217cd624439',
    }),
  ],
  secret: 'qwer1234',
};
export default NextAuth(authOptions);
