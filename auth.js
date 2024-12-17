import NextAuth from 'next-auth'
import GitHub from "next-auth/providers/github"

export const authConfig = {
    session: {
        strategy: 'jwt',
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
})