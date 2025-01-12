import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  return (
    <div className="social-container fixed bottom-5 left-5 flex-col gap-4 lg:flex hidden">
      <a href="https://www.linkedin.com/in/davanesh-saminathan" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={28} className="text-white hover:text-secondary transition-colors" />
      </a>
      <a href="https://github.com/Davanesh" target="_blank" rel="noopener noreferrer">
        <FaGithub size={28} className="text-white hover:text-secondary transition-colors" />
      </a>
      <a href="https://leetcode.com/u/8897gGzAr4" target="_blank" rel="noopener noreferrer">
        <SiLeetcode size={28} className="text-white hover:text-secondary transition-colors" />
      </a>
    </div>
  );
};

export default Social;