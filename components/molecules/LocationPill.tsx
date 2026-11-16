interface LocationPillProps {
  localizacao: string;
}

export default function LocationPill({ localizacao }: LocationPillProps) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-full text-xs sm:text-sm text-emerald-300 mb-4">
      <span>📍</span>
      <span>
        Você está em: <strong className="text-white">{localizacao}</strong>
      </span>
    </div>
  );
}
