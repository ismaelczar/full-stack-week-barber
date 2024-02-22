import { ptBR } from "date-fns/locale";
import BookingCard from "../_components/booking-card";
import Header from "../_components/header";
import Search from "./_components/search";

import { format } from 'date-fns'
import BarberhopItem from "../_components/barbershop-item";
import { db } from "../_lib/prisma";


const Home = async () => {

  const barberhops = await db.barbershop.findMany({})

  return (
    <>
      <Header />
      <main className="px-5">
        <div className="">
          <h1 className="text-white font-semibold text-2xl">Olá, Ismael</h1>
          <p>{format(new Date(), "EEEE',' d 'de' MMMM ", {
            locale: ptBR
          })}</p>
        </div>

        <div className="flex flex-col gap-6 py-5">
          <Search />
          <BookingCard />
        </div>

        <div className="mt-6">
          <h2 className="uppercase mb-3 text-[#838896] text-sm ">recomendados</h2>
          <div className="flex items-center gap-4 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden">
            {barberhops.map((barbeshop) => (
              <BarberhopItem
                key={barbeshop.id}
                barbeshop={barbeshop}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 mb-[4.5rem]">
          <h2 className="uppercase mb-3 text-[#838896] text-sm ">populares</h2>
          <div className="flex items-center gap-4 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden">
            {barberhops.map((barbeshop) => (
              <BarberhopItem
                key={barbeshop.id}
                barbeshop={barbeshop}
              />
            ))}
          </div>
        </div>

      </main>
    </>
  );
}

export default Home;