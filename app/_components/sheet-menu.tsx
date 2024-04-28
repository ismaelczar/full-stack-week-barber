'use client'

import { Calendar, Home, LogIn, UserCircle } from "lucide-react";
import { Separator } from "./ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Button } from "./ui/button";
import User from "./user";

const SheetMenu = () => {

  return (
    <SheetContent className="p-0 flex flex-col">
      <SheetHeader className="items-start p-4">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <Separator />

      <div className="flex flex-col py-6 px-5 gap-3">
        <User />

        <div className="flex flex-col gap-3 mt-2">
          <Button className="text-sm justify-start flex items-center gap-2" variant="outline">
            <Home size={16} />
            Início
          </Button>

          <Button className="text-sm justify-start flex items-center gap-2" variant="outline">
            <Calendar size={16} />
            Agendamentos
          </Button>
        </div>
      </div>
    </SheetContent>
  );
}

export default SheetMenu;