import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileMenu from "./menu/mb-menu";

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
  return (
    <header className="flex items-center p-4 border-b space-x-4 justify-between">
      <MobileMenu />
      <div className="flex space-x-6">
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={150} height={100} />
        </Link>
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
      <Button> Get Started</Button>
    </header>
  );
}
