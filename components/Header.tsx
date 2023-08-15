import React from "react";
import DownloadButton from "./DownloadButton";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex justify-between items-center space-x-4">
          <h1 className="text-3xl font-bold">Resume</h1>

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/">Home</Link>
              </li>
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
