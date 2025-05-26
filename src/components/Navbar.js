import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-4 flex items-center justify-between px-6 py-4 bg-gray-800 bg-opacity-70">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/imagens/logo1.png" 
          alt="Logo" 
          className=" absolute h-36 mt-2 w-auto object-contain -ml-6 sm:h-32 md:h-28" 
        />
      </div>

      {/* Título centralizado */}
      <div className=" flex-1 ml-20 text-center">
        <span className="text-2xl text-center text-gold font-comfortaa">
          Buffet Grand Chef
        </span>
      </div>

      {/* Menu desktop */}
      <div className="hidden  md:flex items-center space-x-8">
        <a href="/login" className="text-white hover:underline">Login</a>
        <a href="/cadastro" className="text-white hover:underline">Cadastro</a>
        <a href="/produtos" className="text-white hover:underline">Produtos</a>
        <a href="/pacotes" className="text-white hover:underline">Personalizar Pacotes</a>
      </div>

      {/* Ícone menu mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? (
            // Ícone X (fechar)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone de hambúrguer
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      
{/* Menu Mobile Dropdown */}
      {isOpen && (
        <div className="absolute -mr-5 mt-[229px] md:hidden z-10 right-6  bg-neutral-200 shadow-md rounded px-6 py-4 space-y-2">
          <a href="#inicio" className="block text-purple-800 hover:underline">
           Login
          </a>
          <a href="#cardapio" className="block text-purple-800 hover:underline">
            Cadastro
          </a>
          <a href="#sobre" className="block text-purple-800 hover:underline">
            Produtos
          </a>
          <a href="#contato" className="block text-purple-800 hover:underline">
            Personalizar Pacote
          </a>
        </div>
      )}
    </nav>
  );
}



