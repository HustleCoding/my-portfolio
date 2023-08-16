import React from "react";
import DownloadButton from "./DownloadButton";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex justify-between items-center space-x-4">
          <a href="/">
            <img className="w-[60px] h-[60px]" src="/favicon.svg" alt="logo" />
          </a>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>

        <DownloadButton />
      </div>
    </header>
  );
};

export default Header;
