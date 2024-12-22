import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { pages } from "next/dist/build/templates/app-page";


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
    }},
    pages:{
      signIn:"/login"
    }
}
export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth(authConfig);
