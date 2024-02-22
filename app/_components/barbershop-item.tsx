import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Barbershop } from '@prisma/client'

interface BarbeshopProps {
  barbeshop: Barbershop
}

const BarberhopItem = ({ barbeshop }: BarbeshopProps) => {
  return (
    <Card className="min-w-[167px] max-w-[167px]">
      <CardContent className="p-0 ">
        <Image
          src={barbeshop.imageUrl}
          alt={barbeshop.name}
          sizes="100vw"
          width={0}
          height={0}
          className="h-[159px] w-full"
        />
        <strong className="text-2xl">{barbeshop.name}</strong>
        <p>{barbeshop.address}</p>
        <Button className="bg-[#26272B] text-white">Reservar</Button>
      </CardContent>
    </Card>

  );
}

export default BarberhopItem;