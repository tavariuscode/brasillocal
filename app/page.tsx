"use client";

import { useState } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { TEMAS, PARCEIROS, ARTIGOS_BLOG } from "@/data/mockBrasilLocal";
import { TemaCategoria } from "@/types/brasillocal";

export default function BrasilLocalHomePage() {
  const [busca, setBusca] = useState<string>("");
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("TODOS");
  const [temaAtivo, setTemaAtivo] = useState<TemaCategoria>("Todos");

  const parceirosFiltrados = PARCEIROS.filter((item) => {
    const bateEstado =
      estadoSelecionado === "TODOS" || item.siglaEstado === estadoSelecionado;
    const bateTema = temaAtivo === "Todos" || item.tema === temaAtivo;

    const termo = busca.toLowerCase();
    const bateBusca =
      item.nome.toLowerCase().includes(termo) ||
      (item.destaqueOferta &&
        item.destaqueOferta.toLowerCase().includes(termo)) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.cidade.toLowerCase().includes(termo) ||
      item.estado.toLowerCase().includes(termo);

    return bateEstado && bateTema && bateBusca;
  });

  return (
    <HomeTemplate
      busca={busca}
      onChangeBusca={setBusca}
      estadoSelecionado={estadoSelecionado}
      onSelecionarEstado={setEstadoSelecionado}
      temas={TEMAS}
      temaAtivo={temaAtivo}
      onSelectTema={setTemaAtivo}
      parceiros={parceirosFiltrados}
      artigos={ARTIGOS_BLOG}
    />
  );
}
