import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { menu } from "../header";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger className="px-3 sm:hidden">
        <MenuIcon className="size-7" />
      </SheetTrigger>
      <SheetContent side="left" className="py-5">
        <SheetTitle></SheetTitle>
        <div className="flex flex-col py-4 *:py-2 *:pl-3 *:rounded-md space-y-2 hover:*:bg-gray-100 font-semibold">
          {menu.map((data, idx) => (
            <Link href={data.path} key={idx}>
              {data.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
