'use client'
import { Separator } from "./ui/separator";
import { SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

import User from "./user";

const SheetMenu = () => {

  return (
    <SheetContent className="p-0 flex flex-col">
      <SheetHeader className="items-start p-4">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <Separator />

      <User />
    </SheetContent>
  );
}

export default SheetMenu;