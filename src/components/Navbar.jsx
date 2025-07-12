import logo from "../assets/SumitJoshi.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20 h-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sumit-joshi-417a91258/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-600" />
        </a>
        <a
          href="https://github.com/josum06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-400" />
        </a>
        {/* <a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500" />
        </a> */}
        <a
          href="https://x.com/SumitJo26139837"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-400" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
