"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    > 
      <Menu setActive={setActive}>
      <Link href="/about">About Me</Link>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/AboutMe">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Java Programming</HoveredLink>
            <HoveredLink href="/seo">Data Science</HoveredLink>
            <HoveredLink href="/branding">Designing</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Project1"
              href="projects"
              src= "/src/Images/pic.png"
              description="Sample project will be displayed here."
              
            />
            <ProductItem
              title="Project1"
              href="#"
              src="/src/Images/pic.png"
              description="Sample project will be displayed here."
            />
            <ProductItem
              title="Project1"
              href="#"
              src="/src/Images/pic.png"
              description="Sample project will be displayed here."
            />
            <ProductItem
              title="Project1"
              href="#"
              src="/src/Images/pic.png"
              description="Sample project will be displayed here."
            />
          </div>
        </MenuItem>
        <Link href="/blogs">
            Blogs
          </Link>
      </Menu>
    </div>
  );
}
