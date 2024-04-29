'use client'

import SheetMenu from "@/app/_components/sheet-menu";
import { Button } from "@/app/_components/ui/button";
import { Separator } from "@/app/_components/ui/separator";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeft, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {

  const router = useRouter()

  function handleBackClick() {
    router.replace('/')
  }
  return (
    <div>
      <div className="h-[250px] w-full relative">

        <Button size="icon" variant="secondary" className="absolute top-4 left-4 z-50 h-10" onClick={handleBackClick}>
          <ChevronLeft />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="secondary" className="absolute top-4 right-4 z-50 ">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetMenu />
        </Sheet>

        <Image src={barbershop.imageUrl} alt={barbershop.name} fill style={{ objectFit: "cover" }} className="opacity-75" />
      </div>

      <div className="flex flex-col gap-2 p-4 ">
        <h2 className="font-semibold text-xl">{barbershop.name}</h2>

        <p className="flex items-center gap-1 text-xs">
          <MapPin size={16} className="text-primary" />
          {barbershop.address}
        </p>

        <p className="flex items-center gap-1 text-xs">
          <StarIcon size={16} className="text-primary " />
          5,0 (899 avaliações)
        </p>
      </div>

      <Separator />

      <div className="flex items-center gap-4 p-4">
        <Button>Serviços</Button>
        <Button variant="outline">Informações</Button>
      </div>
    </div>
  );
}

export default BarbershopInfo;

