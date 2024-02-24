import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "../_components/barbershop-info";

interface BarbershopDetailsProps {
  params: {
    id?: string;
  }
}

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id
    },
    include: {
      services: true
    }
  });

  if (!barbershop) {
    //TODO: Redirecionar para a home.
    return null
  }

  return (
    <BarbershopInfo barbershop={barbershop} />

  );
}

export default BarbershopDetails;