import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // <-- Adicionado

  return (
    <nav className="mt-4 flex items-center justify-between px-6 py-4 bg-gray-800 bg-opacity-70">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/imagens/logo1.png"
          alt="Logo"
          className="absolute h-36 mt-2 w-auto object-contain -ml-6 sm:h-32 md:h-28"
        />
      </div>

      {/* Título centralizado */}
      <div className="flex-1 ml-20 text-center">
        <span className="text-2xl text-center text-gold font-comfortaa">
          Buffet Grand Chef
        </span>
      </div>

      {/* Menu Desktop */}
      <div className="hidden md:flex items-center space-x-6 mr-4">
        <a href="/produtos" className="text-white hover:underline">
          Produtos
        </a>
        <a href="/pacotes" className="text-white hover:underline">
          Personalizar Pacotes
        </a>

        <button
          onClick={() => setIsLoginOpen(true)}
          className="relative px-4 bg-transparent text-center text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group"
        >
          Login
          <i className="fas fa-user-circle text-lg mr-2"></i>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#a855f7]"></span>
        </button>

        <button
          onClick={() => setIsRegisterOpen(true)}
          className="relative px-4 bg-transparent text-center text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 group"
        >
          Cadastro
          <i className="fas fa-user-circle text-lg mr-2"></i>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_12px_#a855f7]"></span>
        </button>
      </div>

      {/* Ícone menu mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute -mr-5 mt-[229px] md:hidden z-10 right-6 bg-neutral-200 shadow-md rounded px-6 py-4 space-y-2">
          <button
            onClick={() => {
              setIsLoginOpen(true);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-purple-800 hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsRegisterOpen(true);
              setIsMenuOpen(false);
            }}
            className="block w-full text-left text-purple-800 hover:underline"
          >
            Cadastro
          </button>
          <a href="/produtos" className="block text-purple-800 hover:underline">
            Produtos
          </a>
          <a href="/pacotes" className="block text-purple-800 hover:underline">
            Personalizar Pacote
          </a>
        </div>
      )}

      {/* Modal de Login */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Modal de Cadastro */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </nav>
  );
}




