import type { NavLink } from "@/types/nav";

export const NavItem = ({ href, title }: NavLink) => {
  return (
    <li className="hover:text-neutral-400 text-xl">
      <a href={href}>{title}</a>
    </li>
  );
};
