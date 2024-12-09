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
import { Button } from "./ui/button";

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
      <div className="flex space-x-6 items-center">
        {/* Logo header icon */}
        <IconHeader />
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
