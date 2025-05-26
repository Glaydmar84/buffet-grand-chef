import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../responsive.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs sm:text-sm text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Grand Chef. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6 sm:space-x-8 -mt-2 mr-4">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-[#b2f2bb] hover:text-[#95e6a0]" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 text-[#a3c9f1] hover:text-[#89b9e9]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 text-[#f7c6d9] hover:text-[#f3acc9]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="/imagens/x-logo1.png"
              alt="X (Twitter)"
              className="w-6 h-6 sm:w-7 sm:h-7 object-contain border border-gray-300 rounded-md p-1 bg-neutral-100 hover:bg-neutral-300 transition duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
