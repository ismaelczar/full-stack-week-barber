import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Barbershop } from '@prisma/client'

interface BarbeshopProps {
  barbeshop: Barbershop
}

const BarberhopItem = ({ barbeshop }: BarbeshopProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">

        <Image
          src={barbeshop.imageUrl}
          alt={barbeshop.name}
          sizes="100vw"
          width={0}
          height={0}
          className="h-[159px] w-full rounded-2xl"
        />

        <div className="px-3 pb-3">
          <h2 className="mt-2 font-bold overflow-hidden text-ellipsis text-nowrap">{barbeshop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbeshop.address}</p>
          <Button className="bg-[#26272B] text-white w-full mt-2">Reservar</Button>
        </div>
      </CardContent >
    </Card >
  );
}

export default BarberhopItem;