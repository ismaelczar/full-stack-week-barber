'use client'

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface ServiceProps {
  service: Service
  isAuthenticated: boolean
}

const ServiceItem = ({ service, isAuthenticated }: ServiceProps) => {

  function handleBookingClick() {
    if (!isAuthenticated) (
      signIn('google')
    )
  }
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex items-center gap-4 p-2">
          <div className="min-h-[110px] min-w-[110px] relative max-h-[110px] max-w-[110px]">
            <Image src={service.imageUrl} alt={service.name} fill style={{ objectFit: "contain" }} />
          </div>

          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>

            <div className="flex items-center justify-between mt-2">
              <p className="text-primary text-sm font-bold">{Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: 'BRL',

              }).format(Number(service.price))}</p>
              <Button variant="outline" className="bg-secondary" onClick={handleBookingClick}>Reservar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceItem;