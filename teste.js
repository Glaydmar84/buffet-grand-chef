import React, { useState } from "react";

const Produtos = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState(null);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const toggleCategoria = (categoria) => {
        setCategoriaAtiva(categoriaAtiva === categoria ? null : categoria);
    };

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
                    preco: 100,
                    unidade: "cento",
                    descricao:
                        "Doce de leite condensado com coco ralado, envolto em açúcar cristal.",
                    imagem:
                        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=927&q=80",
                },
                {
                    nome: "Cupcake Red Velvet",
                    preco: 7.5,
                    unidade: "unidade",
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
                    preco: 200,
                    unidade: "kg",
                    descricao: "Bolo recheado com brigadeiro e cobertura de ganache.",
                    imagem:
                        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=774&q=80",
                },
            ],
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
            <div className="w-[750px] h-[40vh] flex flex-col bg-white/70 shadow-2xl rounded-lg overflow-hidden">

                {/* Título */}
                <div className="bg-amber-700 py-2">
                    <h1 className="text-center text-white text-xl font-bold">
                        Nosso Cardápio
                    </h1>
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col md:flex-row flex-1">

                    {/* Lista de Produtos */}
                    <div className="w-full md:w-5/12 overflow-auto">
                        {categorias.map((cat) => (
                            <div key={cat.id} className="border-b border-gray-200">
                                <button
                                    onClick={() => toggleCategoria(cat.id)}
                                    className="w-full px-6 py-2 flex justify-between items-center bg-amber-50 hover:bg-amber-100 transition-colors"
                                >
                                    <span className="text-lg font-semibold text-amber-900">
                                        {cat.nome}
                                    </span>
                                    <span
                                        className={`transform transition-transform ${categoriaAtiva === cat.id ? "rotate-180" : ""
                                            }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {categoriaAtiva === cat.id && (
                                    <div className="bg-white px-4 pb-2">
                                        {cat.produtos.map((prod) => (
                                            <div
                                                key={prod.nome}
                                                onClick={() => handleSelecionarProduto(prod)}
                                                className="py-2 cursor-pointer border-b border-gray-100 last:border-0 hover:bg-amber-50 px-2 rounded"
                                            >
                                                <h3 className="font-medium text-amber-800">
                                                    {prod.nome}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    R$ {prod.preco.toFixed(2)} ({prod.unidade})
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Detalhes do Produto */}
                    <div className="w-full md:w-7/12 flex items-center justify-center p-4 bg-blue-300/70">
                        {produtoSelecionado ? (
                            <div className="text-center">
                                <img
                                    src={produtoSelecionado.imagem}
                                    alt={produtoSelecionado.nome}
                                    className="w-40 h-28 object-cover mx-auto rounded-lg shadow-md"
                                />
                                <h2 className="text-xl font-bold text-amber-900 mt-2">
                                    {produtoSelecionado.nome}
                                </h2>
                                <p className="text-gray-700 text-sm">
                                    {produtoSelecionado.descricao}
                                </p>
                                <p className="text-md text-amber-800 font-semibold mt-1">
                                    R$ {produtoSelecionado.preco.toFixed(2)} ({produtoSelecionado.unidade})
                                </p>
                                <button className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-1.5 rounded-full transition mt-2">
                                    Comprar
                                </button>
                            </div>
                        ) : (
                            <p className="text-gray-500 text-center">
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
