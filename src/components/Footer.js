import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-opacity-65 mb-2 h-10 py-4 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Texto */}
        <p className="text-sm text-white mb-4 md:mb-0">© {new Date().getFullYear()} Grand Chef. Todos os direitos reservados.</p>

        {/* Ícones de redes sociais */}
        <div className="flex space-x-8 -mt-2 mr-8">
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-8 h-8 text-[#b2f2bb] hover:text-[#95e6a0]" /> {/* verde pastel suave */}
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-7 h-7 text-[#a3c9f1] hover:text-[#89b9e9]" /> {/* azul pastel */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-7 h-7 text-[#f7c6d9] hover:text-[#f3acc9]" /> {/* rosa pastel */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 block"
          >
            <img
              src="/imagens/x-logo1.png"
              alt="X (Twitter)"
             className="w-7 h-7 object-contain border border-gray-300 rounded-md p-1 
             bg-neutral-100 hover:bg-neutral-300 transition duration-200 "
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

