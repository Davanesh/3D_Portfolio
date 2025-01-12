import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-between lg:flex-row">
        {/* Text removed as per your request */}
        
        {/* Social links visible only on mobile */}
        <div className="flex mt-6 md:mt-0 gap-8 lg:hidden">
          <a
            href="https://www.linkedin.com/in/davanesh-saminathan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Davanesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://leetcode.com/u/8897gGzAr4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors"
          >
            <SiLeetcode size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-secondary pt-4 text-center">
        <p className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} Davanesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
