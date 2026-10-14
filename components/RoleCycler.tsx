"use client";

import { useEffect, useState } from "react";
import { roles } from "@/app/data";

export default function RoleCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % roles.length), 2500);
    return () => window.clearInterval(timer);
  }, []);

  return <span key={roles[index]} className="hero-role min-w-[200px]">{roles[index]}<span className="ml-1 animate-pulse text-cyan-300">_</span></span>;
}
