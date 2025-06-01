import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CardCarousel from './components/CardCarousel';
import Footer from './components/Footer';
import Produto from './pages/Produtos'; // ✅ Importa a página Produto
import './responsive.css';

function App() {
  return (
    <Router>
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
          <Routes>
            <Route path="/" element={<CardCarousel />} /> {/* Home */}
            <Route path="/produtos" element={<Produto />} /> {/* Página Produtos */}
          </Routes>
        </div>

        {/* Rodapé fixado no final da página */}
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;





