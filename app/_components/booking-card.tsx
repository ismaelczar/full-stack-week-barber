import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingCard = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="uppercase text-[#838896] text-sm ">agendamentos</h2>
      <Card>
        <CardContent className="flex items-center justify-between p-0 ">
          <div className="p-3 flex flex-col gap-2 flex-1 border-r">
            <Badge className="w-fit text-xs bg-[#221C3D] text-[#8162FF]">Confirmado</Badge>
            <h2 className="text-base">Corte de Cabelo</h2>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-base">Vintage Barber</p>
            </div>
          </div>

          <div className=" flex flex-col gap-2 items-center w-[100px]">
            <p className="text-sm">Fevereiro</p>
            <p className="text-2xl">06</p>
            <p className="text-sm">10:00</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookingCard;