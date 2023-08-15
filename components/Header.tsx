import React from "react";
import DownloadButton from "./DownloadButton";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-dark text-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Resume</h1>
        <DownloadButton />
      </div>
    </header>
  );
};

export default Header;
