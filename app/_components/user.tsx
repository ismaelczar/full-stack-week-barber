import { Button } from "./ui/button"
import { Calendar, Home, LogIn, LogOut, UserCircle } from "lucide-react"
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";


const User = () => {
  const { data, status } = useSession()

  function handleSignIn() {
    signIn("google")
  }

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      {status === 'authenticated' ?
        (<div className="flex flex-col py-6 px-5 gap-3">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={data.user?.image ?? ''} alt="Foto de perfil" />
              </Avatar>

              <strong>{data.user?.name}</strong>
            </div>
            <Button variant="secondary" onClick={handleSignOut} className="p-2.5">
              <LogOut size={16} />
            </Button>

          </div>
          <div className="flex flex-col gap-3 mt-2">
            <Button className="text-sm justify-start flex items-center gap-2" variant="outline" asChild>
              <Link href="/">
                <Home size={16} />
                Início</Link>
            </Button>

            <Button className="text-sm justify-start flex items-center gap-2" variant="outline" asChild>
              <Link href="/agendamentos">
                <Calendar size={16} />
                Agendamentos
              </Link>
            </Button>
          </div>
        </div>
        ) :
        (<div className="flex flex-col py-6 px-5 gap-3">
          <div className="flex items-center gap-2">
            <UserCircle className="text-[#838896]" size={40} />
            <strong>Olá. Faça sei login!</strong>
          </div>
          <Button className="flex items-center justify-start gap-2" variant="secondary" onClick={handleSignIn}>
            <LogIn size={16} />
            Fazer login
          </Button>
        </div>)
      }
    </>
  );
}

export default User;