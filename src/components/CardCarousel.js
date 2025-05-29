import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FlipCard from './CardFlip';

 
const CardCarousel = () => {
  const cardsData = [
    {
      id: 1,
      title: "Pacote Bronze",
      image: "/imagens/img01.png",
      price: "R$ 150,00",
      rating: 4,
      serves: "Atende 100 pessoas",
      items: {
        Salgados: [
          { nome: "Coxinha", quantidade: 100 },
          { nome: "Pastel", quantidade: 100 },
          { nome: "Mini-hambúrguer", quantidade: 80 },
        ],
        Bolos: [{ nome: "Morango", quantidade: 1 }],
        Doces: [
          { nome: "Brigadeiro", quantidade: 100 },
          { nome: "Beijinho", quantidade: 100 },
        ],
      },
    },
    {
      id: 2,
      title: "Pacote Prata",
      image: "/imagens/img02.png",
      price: "R$ 250,00",
      rating: 4.5,
      serves: "Atende 250 pessoas",
      items: {
        Salgados: [
          { nome: "Coxinha", quantidade: 200 },
          { nome: "Pastel", quantidade: 200 },
          { nome: "Mini-hambúrguer", quantidade: 160 },
        ],
        Bolos: [{ nome: "Maracujá", quantidade: 1 }],
        Doces: [
          { nome: "Brigadeiro", quantidade: 200 },
          { nome: "Beijinho", quantidade: 200 },
        ],
      },
    },
    {
      id: 3,
      title: "Pacote Ouro",
      image: "/imagens/img13.png",
      price: "R$ 350,00",
      rating: 5,
      serves: "Atende 350 pessoas",
      items: {
        Salgados: [
          { nome: "Coxinha", quantidade: 300 },
          { nome: "Pastel", quantidade: 300 },
          { nome: "Mini-hambúrguer", quantidade: 240 },
        ],
        Bolos: [{ nome: "Doce de leite", quantidade: 1 }],
        Doces: [
          { nome: "Brigadeiro", quantidade: 300 },
          { nome: "Beijinho", quantidade: 300 },
        ],
      },
    },
    {
      id: 4,
      title: "Pacote Platina",
      image: "/imagens/img14.png",
      price: "R$ 450,00",
      rating: 5,
      serves: "Atende 400 pessoas",
      items: {
        Salgados: [
          { nome: "Coxinha", quantidade: 400 },
          { nome: "Pastel", quantidade: 400 },
          { nome: "Mini-hambúrguer", quantidade: 320 },
        ],
        Bolos: [{ nome: "Chocolate", quantidade: 1 }],
        Doces: [
          { nome: "Brigadeiro", quantidade: 400 },
          { nome: "Beijinho", quantidade: 400 },
        ],
      },
    },
    {
      id: 5,
      title: "Pacote Diamante",
      image: "/imagens/img15.jpeg",
      price: "R$ 550,00",
      rating: 5,
      serves: "Atende 500 pessoas",
      items: {
        Salgados: [
          { nome: "Coxinha", quantidade: 500 },
          { nome: "Pastel", quantidade: 500 },
          { nome: "Mini-hambúrguer", quantidade: 400 },
        ],
        Bolos: [{ nome: "Red Velvet", quantidade: 1 }],
        Doces: [
          { nome: "Brigadeiro", quantidade: 500 },
          { nome: "Beijinho", quantidade: 500 },
        ],
      },
    },
  ];
 
  return (
    <div className=" carousel-container w-full h-full overflow-hiden flex flex-col items-center">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1020: { slidesPerView: 3 }, 
          1280: { slidesPerView: 4 },
        }}
        className="w-full max-w-[1500px] px-6"
      >
         
        {cardsData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex justify-center">
              <div className="w-[280px] sm:w-[320px] md:w-[290px] h-[431px]">
                <FlipCard data={data} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </div>
  );
};

export default CardCarousel;

