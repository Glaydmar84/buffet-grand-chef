import React from 'react';
import Navbar from './components/Navbar';
import CardCarousel from './components/CardCarousel';
import Footer from './components/Footer'; // ✅ Importa o Footer corretamente
import './responsive.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-hidden">
      {/* Fundo com brilho reduzido */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75 -z-10"
        style={{
          backgroundImage: "url('/imagens/fundoBuffet.png')",
        }}
      ></div>

      {/* Conteúdo acima do fundo */}
      <div className="relative z-10 flex-grow">
        <Navbar />
        <CardCarousel />
      </div>

      {/* Rodapé fixado no final da página */}
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;




