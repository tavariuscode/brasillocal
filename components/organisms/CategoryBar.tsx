import { TemaCategoria } from "@/types/brasillocal";
import Button from "../atoms/Button";

interface CategoryBarProps {
  temas: TemaCategoria[];
  temaAtivo: TemaCategoria;
  onSelectTema: (tema: TemaCategoria) => void;
}

export default function CategoryBar({
  temas,
  temaAtivo,
  onSelectTema,
}: CategoryBarProps) {
  return (
    <section className="sticky top-0 z-10 bg-white border-b border-slate-200 px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto">
        {temas.map((tema) => (
          <Button
            key={tema}
            onClick={() => onSelectTema(tema)}
            variant={temaAtivo === tema ? "pillActive" : "pillInactive"}
            className="whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm"
          >
            {tema}
          </Button>
        ))}
      </div>
    </section>
  );
}
