import React, { useRef } from "react";
import FlipCard from "./CardFlip";

const CardCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = 340;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const bronzeItems = {
  Salgados: [
    { nome: "Coxinha", quantidade: 100 },
    { nome: "Pastel", quantidade: 100 },
    { nome: "Mini-hambúrguer", quantidade: 80 }
  ],
  Bolos: [
    { nome: "Morango", quantidade: 1 },
    { nome: "Maracujá", quantidade: 1 },
    { nome: "Abacaxi", quantidade: 1 }
  ],
  Doces: [
    { nome: "Brigadeiro", quantidade: 100 },
    { nome: "Beijinho", quantidade: 100 },
    { nome: "Moranguinho", quantidade: 100 }
  ]
};

const prataItems = {
  Salgados: [
    { nome: "Coxinha", quantidade: 200 },
    { nome: "Pastel", quantidade: 200 },
    { nome: "Mini-hambúrguer", quantidade: 160 }
  ],
  Bolos: [
    { nome: "Maracujá", quantidade: 1 }
  ],
  Doces: [
    { nome: "Brigadeiro", quantidade: 200 },
    { nome: "Beijinho", quantidade: 200 },
    { nome: "Moranguinho", quantidade: 200 }
  ]
};

const ouroItems = {
  Salgados: [
    { nome: "Coxinha", quantidade: 300 },
    { nome: "Pastel", quantidade: 300 },
    { nome: "Mini-hambúrguer", quantidade: 240 }
  ],
  Bolos: [
    { nome: "Doce de leite", quantidade: 1 }
  ],
  Doces: [
    { nome: "Brigadeiro", quantidade: 300 },
    { nome: "Beijinho", quantidade: 300 },
    { nome: "Moranguinho", quantidade: 300 }
  ]
};

const platinaItems = {
  Salgados: [
    { nome: "Coxinha", quantidade: 400 },
    { nome: "Pastel", quantidade: 400 },
    { nome: "Mini-hambúrguer", quantidade: 320 }
  ],
  Bolos: [
    { nome: "Chocolate", quantidade: 1 }
  ],
  Doces: [
    { nome: "Brigadeiro", quantidade: 400 },
    { nome: "Beijinho", quantidade: 400 },
    { nome: "Moranguinho", quantidade: 400 }
  ]
};

const diamanteItems = {
  Salgados: [
    { nome: "Coxinha", quantidade: 500 },
    { nome: "Pastel", quantidade: 500 },
    { nome: "Mini-hambúrguer", quantidade: 400 }
  ],
  Bolos: [
    { nome: "Red Velvet", quantidade: 1 }
  ],
  Doces: [
    { nome: "Brigadeiro", quantidade: 500 },
    { nome: "Beijinho", quantidade: 500 },
    { nome: "Moranguinho", quantidade: 500 }
  ]
};

  const cardsData = [
  {
    id: 1,
    title: "Pacote Bronze",
    image: "/imagens/img16.jpeg",
    price: "R$ 150,00",
    rating: 4,
    serves: "Atende 100 pessoas",
    items: bronzeItems
  },
  {
    id: 2,
    title: "Pacote Prata",
    image: "/imagens/img12.png",
    price: "R$ 250,00",
    rating: 4.5,
    serves: "Atende 250 pessoas",
    items: prataItems
  },
  {
    id: 3,
    title: "Pacote Ouro",
    image: "/imagens/img13.png",
    price: "R$ 350,00",
    rating: 5,
    serves: "Atende 350 pessoas",
    items: ouroItems
  },
  {
    id: 4,
    title: "Pacote Platina",
    image: "/imagens/img14.png",
    price: "R$ 450,00",
    rating: 5,
    serves: "Atende 400 pessoas",
    items: platinaItems
  },
  {
    id: 5,
    title: "Pacote Diamante",
    image: "/imagens/img15.jpeg",
    price: "R$ 550,00",
    rating: 5,
    serves: "Atende 500 pessoas",
    items: diamanteItems
  }
];


  return (
    <div className="relative w-full flex items-center ' py-4 px-10 ">
      {/* Botão esquerdo */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 w-10 h-10 bg-transparent ml-6 border border-purple-300 text-gold text-xl rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Lista de Cards com rolagem horizontal */}
      <div ref={carouselRef} className="flex gap-20 overflow-x-auto scroll-smooth no-scrollbar px-10">
        {cardsData.map((data) => (
          <div key={data.id} className="flex-shrink-0 w-[237px]">
            <FlipCard data={data} />
          </div>
        ))}
      </div>

      {/* Botão direito */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 mr-8 w-10 h-10 bg-transparent flex items-center justify-center transform rotate-180 border border-purple-300 text-gold text-xl rounded-full shadow-md hover:bg-gray-700 hover:scale-110 transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
};

export default CardCarousel;

