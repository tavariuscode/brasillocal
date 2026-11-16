"use client";

import { useState, useEffect } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { PARCEIROS, ARTIGOS_BLOG } from "@/data/mockBrasilLocal";
import { TEMAS } from "@/data/TEMAS";
import { Parceiro, TemaCategoria } from "@/types/brasillocal";

// Interface dos dados que chegam da Fake Store API
interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function BrasilLocalHomePage() {
  const [localizacao] = useState<string>("Fortaleza, Ceará");
  const [busca, setBusca] = useState<string>("");
  const [temaAtivo, setTemaAtivo] = useState<TemaCategoria>("Todos");
  const [listaParceiros, setListaParceiros] = useState<Parceiro[]>(PARCEIROS);
  const [carregando, setCarregando] = useState<boolean>(true);

  useEffect(() => {
    async function buscarDadosFakeAPI() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        const produtos: FakeStoreProduct[] = await resposta.json();

        // Converte os itens da FakeAPI para o formato oficial do BrasilLocal
        const parceirosConvertidos: Parceiro[] = produtos.map((prod, index) => {
          const temasDisponiveis: Exclude<TemaCategoria, "Todos">[] = [
            "Turismo",
            "Shows",
            "Esporte",
            "Cultura",
            "Gastronomia",
          ];
          const temaSorteado = temasDisponiveis[index % temasDisponiveis.length];

          return {
            id: 100 + prod.id,
            slug: `parceiro-api-${prod.id}`,
            nome: prod.title.slice(0, 32) + "...",
            tema: temaSorteado,
            cidade: "Fortaleza",
            estado: "Ceará",
            descricao: prod.description.slice(0, 95) + "...",
            imagem: prod.image,
            corBadge: "bg-blue-100 text-blue-800",
            whatsapp: "5585999999999",
            estilo: {
              fundo: "bg-slate-50",
              banner: "bg-gradient-to-r from-blue-700 to-indigo-800 text-white",
              botao: "bg-blue-600 hover:bg-blue-700 text-white",
              destaque: "text-blue-700",
            },
            servicos: [
              {
                titulo: prod.title,
                preco: `R$ ${prod.price.toFixed(2).replace(".", ",")}`,
                detalhe: prod.description,
              },
            ],
          };
        });

        // Junta os seus parceiros manuais com os novos vindos da API
        setListaParceiros([...PARCEIROS, ...parceirosConvertidos]);
      } catch (erro) {
        console.error("Erro ao carregar dados da FakeAPI:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarDadosFakeAPI();
  }, []);

  const parceirosFiltrados = listaParceiros.filter((item) => {
    const bateTema = temaAtivo === "Todos" || item.tema === temaAtivo;
    const termo = busca.toLowerCase();
    const bateBusca =
      item.nome.toLowerCase().includes(termo) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.cidade.toLowerCase().includes(termo) ||
      item.estado.toLowerCase().includes(termo);

    return bateTema && bateBusca;
  });

  return (
    <>
      {carregando && (
        <div className="bg-emerald-600 text-white text-center text-xs py-1.5 font-medium">
          Carregando novos parceiros da API...
        </div>
      )}
      <HomeTemplate
        localizacao={localizacao}
        busca={busca}
        onChangeBusca={setBusca}
        temas={TEMAS}
        temaAtivo={temaAtivo}
        onSelectTema={setTemaAtivo}
        parceiros={parceirosFiltrados}
        artigos={ARTIGOS_BLOG}
      />
    </>
  );
}
