"use client";
import { useEffect, useState } from "react";
import { NavItem } from "@/components/navbar/nav-item";
import { authedNav, publicNav } from "@/constants/nav-link-items";
import type { NavLink } from "@/types/nav";
import { Navbar } from "@/components/navbar/navbar";
import { Button } from "@/components/button";

export default function Home() {
  const [authed, setAuthed] = useState(false);
  const toggleAuthState = () => {
    setAuthed(!authed);
  };

  return (
    <div className="container mx-auto h-screen w-full px-2">
      <Navbar authed={authed} />
      <main>
        <Button
          className="h-10 rounded"
          variant="grey"
          onClick={toggleAuthState}
        >
          Toggle Auth State
        </Button>
      </main>
    </div>
  );
}
