"use client";

import { useState } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { TEMAS, PARCEIROS, ARTIGOS_BLOG } from "@/data/mockBrasilLocal";
import { TemaCategoria } from "@/types/brasillocal";

export default function BrasilLocalHomePage() {
  const [localizacao, setLocalizacao] = useState<string>("Todas as cidades");
  const [busca, setBusca] = useState<string>("");
  const [temaAtivo, setTemaAtivo] = useState<TemaCategoria>("Todos");

  const parceirosFiltrados = PARCEIROS.filter((item) => {
    const bateTema = temaAtivo === "Todos" || item.tema === temaAtivo;

    const cidadeCompleta = `${item.cidade}, ${item.estado}`;
    const bateCidade =
      localizacao === "Todas as cidades" || cidadeCompleta === localizacao;

    const termo = busca.toLowerCase();
    const bateBusca =
      item.nome.toLowerCase().includes(termo) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.cidade.toLowerCase().includes(termo) ||
      item.estado.toLowerCase().includes(termo);

    return bateTema && bateCidade && bateBusca;
  });

  return (
    <HomeTemplate
      localizacao={localizacao}
      onChangeLocalizacao={setLocalizacao}
      busca={busca}
      onChangeBusca={setBusca}
      temas={TEMAS}
      temaAtivo={temaAtivo}
      onSelectTema={setTemaAtivo}
      parceiros={parceirosFiltrados}
      artigos={ARTIGOS_BLOG}
    />
  );
}
