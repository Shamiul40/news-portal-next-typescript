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
import { Menu } from "lucide-react";

export default function Navbar() {
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
              <Link href="/news">News</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* services */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link href="/services">Services</Link>
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
          <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* contact */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/contact">Contact</Link>
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
        <Button className="cursor-pointer" variant="default">
          Login
        </Button>
      </div>
      <Button className="lg:hidden">
        <Menu size={24} />
      </Button>
    </header>
  );
}
