import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";


const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECERT,
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    }}
}
export const {
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
