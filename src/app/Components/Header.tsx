import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-evenly items-center h-14 bg-white">
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
