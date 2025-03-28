"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-greenCustom px-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="w-28 lg:w-34">
            <Image src="/logo.png" alt="Logo" width={120} height={60} />
          </div>
        </Link>

        {/* Large Screen Menu with Underline Animation */}
        <div className="hidden text-xl md:flex space-x-10 text-white ">
          {["courses", "counseling", "programs", "blog", "about"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item}`}
                className="relative group hover:text-yellowCustom"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-[6px] w-0 h-[2px] bg-yellowCustom transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={35} />
        </button>

        {/* Overlay (Click to Close) */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Menu (Right Side) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-5 right-5 text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
          <div className="mt-16 flex flex-col space-y-6 p-6 text-gray-900">
            {["courses", "counseling", "programs", "blog", "about"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
