"use client";
import type { NavLink } from "@/types/nav";

import { useEffect, useState } from "react";
import { authedNav, publicNav } from "@/constants/nav-link-items";

import { NavItem } from "@/components/navbar/nav-item";
import { Button } from "@/components/button";

export const Navbar = ({ authed }: { authed: boolean }) => {
  const [navLinks, setNavLinks] = useState<NavLink[]>(publicNav);

  useEffect(() => {
    if (authed) {
      setNavLinks(authedNav);
    } else {
      setNavLinks(publicNav);
    }
  }, [authed]);

  return (
    <div className="w-full h-[80px] bg-neutral-800 flex flex-row justify-between items-center">
      <h2 className="text-3xl">Loreinator-5000</h2>
      <ul className="flex flex-row gap-5 items-center">
        {navLinks?.map((link) => (
          <NavItem
            href={link.href}
            title={link.title}
            key={`navLink-${link.title}`}
          />
        ))}
        {authed ? <Button className="text-xl px-4 py-2">Log Out</Button> : null}
      </ul>
    </div>
  );
};
