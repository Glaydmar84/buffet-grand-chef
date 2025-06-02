import React, { useState } from "react";
import categorias from "../data/produtosData";

const Produtos = () => {
    const [categoriaAtiva, setCategoriaAtiva] = useState("salgados");
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const handleSelecionarProduto = (produto) => {
        setProdutoSelecionado(produto);
    };

    const categoriaAtual = categorias.find((cat) => cat.id === categoriaAtiva);

    return (
        <div className="mt-4 flex items-center justify-center bg-wtransparent">
            <div className="w-[90%] max-w-5xl flex flex-col bg-white/30 shadow-2xl rounded-lg overflow-hidden">

                {/* Título */}
                <div className="bg-transparent/30 py-2">
                    <h1 className="text-center text-white text-3xl font-bold">
                        Nosso Cardápio
                    </h1>
                </div>

                {/* Barra de Categorias */}
                <div className="flex bg-neutral-200/70 text-md text-purple-900 font-bold">
                    {categorias.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                setCategoriaAtiva(cat.id);
                                setProdutoSelecionado(null);
                            }}
                            className={`flex-1 py-2 text-center font-semibold hover:bg-pink-100 transition ${categoriaAtiva === cat.id ? "bg-purple-200" : ""}`}
                        >
                            {cat.nome}
                        </button>
                    ))}
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col md:flex-row flex-1 p-4 gap-4">

                    {/* Lista de produtos */}
                    <div className="w-full md:w-5/12 bg-gray-700/50 border-2 border-white rounded-lg shadow-md p-4 overflow-auto">
                        <h2 className="text-2xl font-bold text-white mb-2">
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

                    {/* Detalhes do Produto */}
                    <div className="w-full md:w-7/12 flex items-center border-2 border-white justify-center bg-gray-700/50 rounded-lg shadow-md p-4">
                        {produtoSelecionado ? (
                            <div className="flex flex-col md:flex-row items-center gap-4">
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
                                        Realizar pedido
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
