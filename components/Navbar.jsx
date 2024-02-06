"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 h-[4rem] shadow-md w-full bg-white">
      <div className="w-full h-full flex gap-5 items-center justify-center">
        <Link
          href="/"
          className={`${pathname === "/" ? "text-blue-500" : null}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? "text-blue-500" : null}`}
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className={`${pathname === "/contact-us" ? "text-blue-500" : null}`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
