"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { IconHeader } from "./icon-header";
import MobileMenu from "./menu/mb-menu";
import UserMenuDropdown from "./user-menu";

export const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Doctors",
    path: "/doctors",
  },
  {
    name: "Contact Us",
    path: "/contact-us",
  },
];

export default function Header() {
  // const router = useRouter();
  return (
    <header className="flex items-center p-4 border-b space-x-4 justify-between">
      <div className="container mx-auto flex justify-between max-sm:w-full">
        <MobileMenu />
        <div className="flex space-x-6 items-center">
          {/* Logo header icon */}
          <IconHeader />
          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {menu.map((data, idx) => (
                <NavigationMenuItem key={idx}>
                  <Link href={data.path} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle({ className: "font-semibold " })}>
                      {data.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/* <Button onClick={() => router.push("/login")}> Get Started</Button> */}
        <UserMenuDropdown />
      </div>
    </header>
  );
}
