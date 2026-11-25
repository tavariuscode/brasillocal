"use client";

import { useState } from "react";
import HomeTemplate from "@/components/templates/HomeTemplate";
import { TEMAS, PARCEIROS, ARTIGOS_BLOG } from "@/data/mockBrasilLocal";
import { TemaCategoria } from "@/types/brasillocal";

export default function BrasilLocalHomePage() {
  const [busca, setBusca] = useState<string>("");
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("TODOS");
  const [temaAtivo, setTemaAtivo] = useState<TemaCategoria>("Todos");
  const [subcategoriaAtiva, setSubcategoriaAtiva] = useState<string>("Todas");
  const [generoAtivo, setGeneroAtivo] = useState<string>("Todos");

  const handleSelectTema = (novoTema: TemaCategoria) => {
    setTemaAtivo(novoTema);
    setSubcategoriaAtiva("Todas");
    setGeneroAtivo("Todos");
  };

  const handleSelectSubcategoria = (novaSub: string) => {
    setSubcategoriaAtiva(novaSub);
    if (novaSub !== "Gêneros Musicais") {
      setGeneroAtivo("Todos");
    }
  };

  const parceirosFiltrados = PARCEIROS.filter((item) => {
    const bateEstado =
      estadoSelecionado === "TODOS" || item.siglaEstado === estadoSelecionado;
    const bateTema = temaAtivo === "Todos" || item.tema === temaAtivo;
    const bateSub =
      subcategoriaAtiva === "Todas" || item.subcategoria === subcategoriaAtiva;
    const bateGenero =
      generoAtivo === "Todos" || item.estiloMusical === generoAtivo;

    const termo = busca.toLowerCase();
    const bateBusca =
      item.nome.toLowerCase().includes(termo) ||
      (item.destaqueOferta &&
        item.destaqueOferta.toLowerCase().includes(termo)) ||
      item.descricao.toLowerCase().includes(termo) ||
      item.cidade.toLowerCase().includes(termo) ||
      item.estado.toLowerCase().includes(termo) ||
      (item.subcategoria && item.subcategoria.toLowerCase().includes(termo)) ||
      (item.estiloMusical && item.estiloMusical.toLowerCase().includes(termo));

    return bateEstado && bateTema && bateSub && bateGenero && bateBusca;
  }).sort(
    (a, b) => Number(Boolean(b.patrocinado)) - Number(Boolean(a.patrocinado))
  );

  return (
    <HomeTemplate
      busca={busca}
      onChangeBusca={setBusca}
      estadoSelecionado={estadoSelecionado}
      onSelecionarEstado={setEstadoSelecionado}
      temas={TEMAS}
      temaAtivo={temaAtivo}
      onSelectTema={handleSelectTema}
      subcategoriaAtiva={subcategoriaAtiva}
      onSelectSubcategoria={handleSelectSubcategoria}
      generoAtivo={generoAtivo}
      onSelectGenero={setGeneroAtivo}
      parceiros={parceirosFiltrados}
      artigos={ARTIGOS_BLOG}
    />
  );
}
