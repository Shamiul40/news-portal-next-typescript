import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function Navbar() {
  return (
    <header className="flex justify-between px-4 shadow-md my-2">
      {/* logo */}
      <Link href="/">Daily News</Link>

      {/* items */}

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem> 
           <NavigationMenuLink href="/news">News</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* login */}
    </header>
  );
}
