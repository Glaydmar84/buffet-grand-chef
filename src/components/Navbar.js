// src/components/Navbar.js
// src/components/Navbar.js
import React from 'react';
export default function Navbar() {
  return (
    <nav className=" relative h-16 mt-4 flex items-center px-6 py-4 bg-gray-700 bg-opacity-65">
      
      {/* 1. Logo à esquerda */}
      <div className="flex items-center ">
        <img src="/imagens/logo1.png" alt="Logo" className="h-32 w-auto object-contain ml-8 mt-2 " />
      </div>

      {/* 2. Título centralizado */}
      <div className="flex-1 ml-24 mt-8 ">
        <span className="text-2xl text-gold font-comfortaa">
         Buffet Grand Chef
        </span>
      </div>

      {/* 3. Área de links e ícones à direita */}
      <div className="flex items-center space-x-20  mt-8 mr-16">
        {/* Links (com flex-1 e justify-center para dar “respiração” à direita) */}
        <div className="flex-1 flex justify-center space-x-12">
          <a href="/login" className="text-white hover:underline">Login</a>
          <a href="/cadastro" className="text-white hover:underline">Cadastro</a>
          <a href="/produtos" className="text-white hover:underline">Produtos</a>
          <a href="/pacotes"   className="text-white hover:underline ">Personalizar pacotes</a>
        </div>
        
      </div>
    </nav>
  );
}


