import React, { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img className="w-[60px] h-[60px]" src="/favicon.svg" alt="logo" />
          </a>
        </div>

        <nav className="hidden sm:flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/gumroad-products">FREE Gumroad Products</Link>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden mr-6">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden transition-all duration-300">
          <nav className="bg-blue-dark p-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/gumroad-products">FREE Gumroad Products</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
