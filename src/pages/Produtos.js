import React, { useState } from "react";

const Produtos = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState("salgados");
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const handleSelecionarProduto = (produto) => {
        setProdutoSelecionado(produto);
    };

    const categorias = [
        {
            nome: "Salgados",
            id: "salgados",
            produtos: [
                {
                    nome: "Coxinha de Frango",
                    preco: 100,
                    unidade: "cento",
                    descricao:
                        "Deliciosas coxinhas com recheio de frango desfiado temperado, envolto em massa crocante.",
                    imagem:
                        "https://images.unsplash.com/photo-1626700051175-6815213e1d1f?auto=format&fit=crop&w=1064&q=80",
                },
                {
                    nome: "Bolinho de Queijo",
                    preco: 150,
                    unidade: "cento",
                    descricao:
                        "Bolinhos crocantes por fora e macios por dentro, com recheio de queijo derretido.",
                    imagem:
                        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=927&q=80",
                },
                {
                    nome: "Empada de Palmito",
                    preco: 170,
                    unidade: "cento",
                    descricao:
                        "Massa folhada crocante recheada com palmito fresco e cremoso.",
                    imagem:
                        "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=774&q=80",
                },
            ],
        },
        {
            nome: "Doces",
            id: "doces",
            produtos: [
                {
                    nome: "Brigadeiro Gourmet",
                    preco: 100,
                    unidade: "cento",
                    descricao:
                        "O clássico brasileiro feito com chocolate nobre e leite condensado.",
                    imagem:
                        "https://images.unsplash.com/photo-1627740654555-1d798b7a8a2c?auto=format&fit=crop&w=776&q=80",
                },
                {
                    nome: "Beijinho",
                    preco: 130,
                    unidade: "cento",
                    descricao:
                        "Doce de leite condensado com coco ralado, envolto em açúcar cristal.",
                    imagem:
                        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=927&q=80",
                },
                {
                    nome: "Cupcake Red Velvet",
                    preco: 200,
                    unidade: "cento",
                    descricao:
                        "Massa aveludada de chocolate com cream cheese frosting e decoração elegante.",
                    imagem:
                        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=774&q=80",
                },
            ],
        },
        {
            nome: "Bolos",
            id: "bolos",
            produtos: [
                {
                    nome: "Bolo de Chocolate",
                    preco: 250,
                    unidade: "2kg",
                    descricao: "Bolo recheado com brigadeiro e cobertura de ganache.",
                    imagem:
                        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=774&q=80",
                },
            ],
        },
    ];

    const categoriaAtual = categorias.find((cat) => cat.id === categoriaAtiva);

    return (
        <div className="mt-4 flex items-center justify-center bg-wtransparent ">
            <div className="w-[90%] max-w-5xl flex flex-col bg-white/30 shadow-2xl rounded-lg overflow-hidden">
                <div className="bg-transparent/30 py-2">
                    <h1 className="text-center text-white  text-xl font-bold">
                        Nosso Cardápio
                    </h1>
                </div>
                {/* Barra superior de categorias */}
                <div className="flex bg-neutral-200/70 text-md text-purple-900  font-bold">
                    {categorias.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setCategoriaAtiva(cat.id);
                                setProdutoSelecionado(null);
                            }}
                            className={`flex-1  py-2 text-center font-semibold hover:bg-pink-100 transition ${categoriaAtiva === cat.id ? "bg-purple-200" : ""
                                }`}
                        >
                            {cat.nome}
                        </button>
                    ))}
                </div>

                {/* Conteúdo principal */}
                <div className="flex flex-col md:flex-row  flex-1 p-4 gap-4">

                    {/* Lista de produtos */}
                    <div className="w-full md:w-5/12 bg-gray-700/50 border-2 border-white rounded-lg shadow-md p-4 borer hover  overflow-auto">
                        <h2 className="text-lg font-bold text-white mb-2">
                            {categoriaAtual?.nome}
                        </h2>
                        {categoriaAtual?.produtos.map((prod) => (
                            <div
                                key={prod.nome}
                                onClick={() => handleSelecionarProduto(prod)}
                                className="p-2 mb-2 rounded cursor-pointer bg-purple-300 hover:bg-pink-200 border border-gray-100"
                            >
                                <h3 className="font-medium text-gray-800">
                                    {prod.nome}
                                </h3>
                                <p className="text-sm text-gray-900">
                                    R$ {prod.preco.toFixed(2)} ({prod.unidade})
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Detalhes do produto */}
                    <div className="w-full md:w-7/12 flex items-center border-2 border-white justify-center bg-gray-700/50 rounded-lg shadow-md p-4">
                        {produtoSelecionado ? (
                            <div className="flex flex-col  rounded-lg md:flex-row items-center gap-4">
                                <img
                                    src={produtoSelecionado.imagem}
                                    alt={produtoSelecionado.nome}
                                    className="w-[70%] p-2 h-52 object-cover border-2 border-purple-400 rounded-xl shadow"
                                />
                                <div className="text-center md:text-left">
                                    <h2 className="text-2xl font-bold text-white">
                                        {produtoSelecionado.nome}
                                    </h2>
                                    <p className="text-white font-bold mt-2">
                                        {produtoSelecionado.descricao}
                                    </p>
                                    <p className="text-lg text-white font-semibold mt-2">
                                        R$ {produtoSelecionado.preco.toFixed(2)} ({produtoSelecionado.unidade})
                                    </p>
                                    <button className="mt-4 bg-purple-400 hover:bg-green-200 text-gray-900 px-5 py-1 font-bold rounded-full transition">
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <p className="text-white font-bold text-center">
                                Selecione um item para visualizar os detalhes.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Produtos;
