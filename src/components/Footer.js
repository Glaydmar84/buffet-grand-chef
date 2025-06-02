import React from 'react';
import { socialLinks } from '../data/footerData';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs sm:text-sm text-white mb-4 md:mb-0">
          © {new Date().getFullYear()} Grand Chef. Todos os direitos reservados.
        </p>

        <div className="flex space-x-6 sm:space-x-8  mr-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-200"
            >
              {link.type === 'icon' && link.icon && (
                <link.icon
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  style={{ color: link.color }}
                  onMouseOver={(e) => (e.currentTarget.style.color = link.hoverColor)}
                  onMouseOut={(e) => (e.currentTarget.style.color = link.color)}
                />
              )}

              {link.type === 'image' && link.image && (
                <img
                  src={link.image}
                  alt={link.name}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain border border-gray-300 rounded-md p-1 bg-neutral-100 hover:bg-neutral-300"
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

