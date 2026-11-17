import Link from "next/link";

export default function FeaturedBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-6">
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Imagem de Destaque */}
          <div className="md:col-span-7 h-52 sm:h-64 md:h-80 relative overflow-hidden">
            <img
              src="https://unsplash.com"
              alt="Festival e Show em Destaque"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent" />
          </div>

          {/* Informações do Evento/Parceiro */}
          <div className="md:col-span-5 p-6 sm:p-8 text-white flex flex-col justify-center">
            <span className="inline-block w-fit bg-sky-600 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
              Destaque da Semana • Fortaleza
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
              Turnê Especial: Banda Forró do Sertão
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 mb-5 line-clamp-2">
              Garanta sua presença no maior encontro de música regional do mês ou contrate para o seu evento.
            </p>
            <Link
              href="/forrodosertao"
              className="w-full sm:w-fit text-center bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
            >
              Ver programação e contato
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
