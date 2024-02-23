'use client'

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Barbershop } from '@prisma/client'
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";


interface BarbeshopProps {
  barbeshop: Barbershop
}

const BarberhopItem = ({ barbeshop }: BarbeshopProps) => {

  const router = useRouter()

  function handleBookingClick() {
    router.push(`/barbershop/${barbeshop.id}`)
  }

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-3 left-3 z-50">
            <Badge variant="secondary" className="opacity-75 flex items-center gap-1">
              <StarIcon size={12} className="fill-primary text-primary" />
              <span className="text-xs">5,0</span>

            </Badge>
          </div>

          <Image
            src={barbeshop.imageUrl}
            alt={barbeshop.name}
            sizes="100vw"
            width={0}
            height={0}
            className="h-[159px] w-full rounded-2xl"
          />
        </div>

        <div className="px-3 pb-3">
          <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">{barbeshop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbeshop.address}</p>
          <Button className="bg-[#26272B] text-white w-full mt-2" onClick={handleBookingClick}>Reservar</Button>
        </div>
      </CardContent >
    </Card >
  );
}

export default BarberhopItem;