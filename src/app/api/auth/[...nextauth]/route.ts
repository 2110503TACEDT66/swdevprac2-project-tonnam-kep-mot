import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import  CredentialsProvider from "next-auth/providers/credentials";
import UserLogin from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";


export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            email: { label: "email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password" }
          },
          //add async authorize function
          async authorize(credentials, req) {

            if(!credentials) return null;

            const user = await UserLogin(credentials.email, credentials.password)

            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ],
    session: { strategy : "jwt" },
    callbacks: {
        async jwt({token, user}) {
          return {...token, ...user }
        },
        async session({session, token,user}) {
          if(token.token){
            
            const res = await getUserProfile(token.token as string)
            session.user = res.data as any
            session.user.token = token.token as string
            // getUserProfile(token.)

          }
          return session
        },
        async redirect({url, baseUrl}) {
          return url.startsWith(baseUrl) ? url : baseUrl
        }
      }
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST , handler as PUT}