import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { NavItems } from "@/pages/constants/NavItems";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const { setTheme } = useTheme();

  return (
    <header className="flex justify-between bg-secondary py-2 sticky top-0 shadow-md z-50">
      <div className="felx font-serif text-xl pt-2 pl-5">
        <p>PORTFOLIO</p>
      </div>
      <div className="flex pr-5 gap-5 font-serif">
        <Link href={NavItems.Home}>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href={NavItems.About}>
          <Button variant="ghost">About</Button>
        </Link>
        <Link href={NavItems.Contact}>
          <Button variant="ghost">Contact</Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <IoSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <IoMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default NavBar;
