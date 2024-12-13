"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { FilterIcon } from "lucide-react";
import { useState } from "react";
import { SideBar } from "./side-bar";

export default function FilterSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <SheetTrigger className="md:hidden border shadow-sm rounded-full font-semibold w-28 flex py-1 gap-2 px-4 items-center">
        <FilterIcon className="size-5" />
        <span>Filter</span>
      </SheetTrigger>
      <SheetContent side="left" className="py-5">
        <SheetTitle className="shadow-sm border rounded-md px-4 font-semibold">Filter</SheetTitle>
        <SideBar className="mt-4" setIsOpen={setIsOpen} />
      </SheetContent>
    </Sheet>
  );
}
