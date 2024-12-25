// /lib/authConfig.js
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";
import NextAuth from "next-auth";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {

    authorized({ auth }) {
      return !!auth?.user;
    },

    async signIn({ user }) {
      try {
        console.log("Signing in user:", user.email);


        const existingGuest = await getGuest(user.email);


        if (!existingGuest) {
          await createGuest({ email: user.email, fullName: user.name });
          console.log("New guest created:", user.email);
        }
        return true;
      } catch (error) {
        console.error("SignIn Error:", error);
        return false;
      }
    },


    async session({ session }) {
      try {
        console.log("Session data before modification:", session);


        const guest = await getGuest(session.user.email);
        if (guest) {

          session.user.fullName = guest.fullName;
          console.log("Updated session with guest data:", session.user);
        } else {
          console.log("No guest data found for:", session.user.email);
        }

        return session;
      } catch (error) {
        console.error("Session Error:", error);
        return session;
      }
    },
  },

  pages: {
    signIn: "/login",
  },
};


export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

