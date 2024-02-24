import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "../_components/barbershop-info";
import ServiceItem from "../_components/service-item";

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
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="p-5 flex flex-col gap-4">
        {
          barbershop?.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))
        }
      </div>
    </div>
  );
}

export default BarbershopDetails;