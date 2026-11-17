interface LocationPillProps {
  localizacao: string;
}

export default function LocationPill({ localizacao }: LocationPillProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-xs sm:text-sm text-slate-200 mb-6 shadow-sm">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span>
        Você está em <strong className="text-white font-semibold">{localizacao}</strong>
      </span>
    </div>
  );
}
