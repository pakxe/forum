import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { connectDB } from '@/utils/database';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '1491e3da367a955e65e0',
      clientSecret: '4653d9637e812711c36408a36be16217cd624439',
    }),
  ],
  secret: 'qwer1234',
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
