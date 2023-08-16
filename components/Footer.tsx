import React from "react";

type FooterProps = {
  className?: string;
};

const Footer: ({ className }: FooterProps) => JSX.Element = ({
  className,
}: FooterProps) => {
  return (
    <footer className={`${className} shadow-md`}>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Florin Dobinciuc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
