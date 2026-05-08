"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-2 py-2 shadow-md  ">
      {/* logo */}
      <Link href="/">Daily News</Link>

      {/* items */}

      <NavigationMenu className="hidden  lg:flex">
        <NavigationMenuList className="flex gap-4">
          {/* news*/}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className={`${pathname === "/news" ? "text-red-500" : ""} hover:bg-transparent`}
                href="/news"
              >
                News
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* services */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link
                className={`${pathname === "/services" ? "text-red-500" : ""} hover:bg-transparent`}
                href="/services"
              >
                Services
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>Web Development</NavigationMenuLink>
              <NavigationMenuLink asChild>Mobile Apps</NavigationMenuLink>
              <NavigationMenuLink asChild>Graphic Design</NavigationMenuLink>
              <NavigationMenuLink asChild>Seo</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* about */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className={`${pathname === "/about" ? "text-red-500" : ""} hover:bg-transparent`}
                href="/about"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                className={`${pathname === "/contact" ? "text-red-500" : ""} hover:bg-transparent`}
                href="/contact"
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* login and dark mode */}
      <div className="gap-4 justify-center hidden lg:flex">
        <div className="flex gap-2 items-center">
          <span>Dark Mode</span>
          <Switch />
        </div>
        <Button className="cursor-pointer" variant="outline">
          Login
        </Button>
      </div>
      <MobileMenu />
    </header>
  );
}
