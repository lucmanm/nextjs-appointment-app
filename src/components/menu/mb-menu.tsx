import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { menu } from "../header";
import { SideBar } from "@/app/doctors/side-bar";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <Sheet>
      <SheetTrigger className="px-3 sm:hidden">
        <MenuIcon className="size-7" />
      </SheetTrigger>
      <SheetContent side="left" className="py-5">
        <SheetTitle></SheetTitle>
        {/* <div className="flex flex-col gap-y-2 bg-transparent">
          {menu.map((data, id) => (
            <Link
              key={id}
              href={`/${data.path.toLowerCase()}`}
              className={`border p-2 rounded-md ${
                data.name.toLowerCase() === decodeURIComponent(pathname).toLowerCase()
                  ? "bg-slate-950 text-white hover:text-slate-950 hover:bg-white hover:border-slate-950 transition-all duration-300"
                  : "hover:border-slate-950"
              }`}
            >
              {data.name}
            </Link>
          ))}
        </div> */}

        <div className="flex flex-col py-4 *:py-2 *:pl-3 *:rounded-md space-y-2 hover:*:bg-gray-100 font-semibold">
          {menu.map((data, idx) => (
            <Link href={data.path} key={idx} className="border hover:border-slate-950 font-normal">
              {data.name}
            </Link>
          ))}
        </div>
        <SheetTitle className="py-1 my-2 border-b-2 font-semibold text-base">Category</SheetTitle>
        <SideBar />
      </SheetContent>
    </Sheet>
  );
}
