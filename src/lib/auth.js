import { getServerSession } from "next-auth/next";

export const authOptions = {
  providers: [
    {
      id: "google",
      name: "Google",
      type: "oauth",
      authorization: {
        url: "https://accounts.google.com/o/oauth2/v2/auth",
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      token: "https://oauth2.googleapis.com/token",
      userinfo: "https://www.googleapis.com/oauth2/v2/userinfo",
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_CLIENT_SECRET,
      },
    },
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = token.user || session.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export async function getSession() {
  return await getServerSession(authOptions);
}

