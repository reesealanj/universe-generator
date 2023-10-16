import type { NavLink } from "@/types/nav";

export const authedNav: NavLink[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/universes",
    title: "Universes",
  },
  {
    href: "/profile",
    title: "Profile",
  },
];

export const publicNav: NavLink[] = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/universes/examples",
    title: "Examples",
  },
];
