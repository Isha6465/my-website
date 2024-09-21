import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex gap-9 justify-center items-center h-20 bg-slate-200 w-full">
      <Link className="text-lg text-blue-950  font-bold" href="\">
        Home
      </Link>
      <Link className="text-lg text-blue-950  font-bold" href="\About">
        About Us
      </Link>
      <Link className="text-lg text-blue-950  font-bold" href="\Contact">
        Contact Us
      </Link>
      <Link className="text-lg text-blue-950  font-bold" href="\Work">
        Our Work
      </Link>
    </div>
  );
};

export default Header;
