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
    <header className="flex justify-between items-center px-4 shadow-md my-2">
      {/* logo */}
      <Link href="/">Daily News</Link>

      {/* items */}

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="flex gap-4">
          {/* news*/}
          <NavigationMenuItem>
            <NavigationMenuLink href="/news">News</NavigationMenuLink>
          </NavigationMenuItem>
          {/* services */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Web Development</NavigationMenuLink>
              <NavigationMenuLink>Mobile Apps</NavigationMenuLink>
              <NavigationMenuLink>Graphic Design</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* about */}
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
          {/* contact */}
          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* login and dark mode */}
      <div className="flex gap-4 justify-center hidden lg:flex">
        <div className="flex gap-2 items-center">
          <span>Dark Mode</span>
          <Switch />
        </div>
        <Button className="cursor-pointer" variant="default">Button</Button>
      </div>
      <Button className="lg:hidden"><Menu size={24} /></Button>
    </header>
  );
}
