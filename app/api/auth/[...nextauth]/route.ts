import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from "@auth/prisma-adapter"
import { Adapter } from "next-auth/adapters"
import { db } from "@/app/_lib/prisma"


// A exportação é necessária para que possamos controlar nos outros componentes se o usuário está logado ou não. Isso nos permite fazer validações e bloqueios nos componentes.
// Essa prática é recomendada em comparação com o uso do `useSession` nos demais componentes.


export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    })
  ]
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }