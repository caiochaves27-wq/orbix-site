import { ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import caixaLogo from "@/assets/caixa-logo-official.svg";
import orbixEmblemGold from "@/assets/orbix-emblem-gold-transparent.png";

const WHATSAPP_URL =
  "https://wa.me/5516981595005?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Orbix%20sobre%20cr%C3%A9dito%20imobili%C3%A1rio";

const links = [
  ["Home", "/#top"],
  ["Simulador", "/#simulador"],
  ["Método", "/#metodo"],
  ["Esteira", "/#esteira"],
  ["Caixa", "/#caixa"],
  ["Presença", "/#presenca"],
  ["App", "/#app"],
  ["Consórcio", "/#consorcio"],
  ["FAQ", "/#faq"],
  ["Blog", "/blog"],
  ["Contato", "/contato"],
];

export function OrbixNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-navy/94 px-4 py-3 shadow-premium backdrop-blur-xl">
        <a href="/#top" className="flex items-center gap-2.5" aria-label="Orbix">
          <img src={orbixEmblemGold} alt="" className="h-9 w-9 object-contain sm:h-10 sm:w-10" />
          <span className="text-xl font-extrabold tracking-[0.18em] text-gold sm:text-2xl">
            ORBIX
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-xs font-semibold text-white/70 xl:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold hover:text-gold sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="/#simulador"
            className="inline-flex items-center gap-2 rounded-full border border-gold/70 px-4 py-2 text-sm font-extrabold uppercase tracking-[0.1em] text-gold shadow-quiet transition hover:bg-gold hover:text-navy-deep"
          >
            Simular <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="pointer-events-none mx-auto mt-3 flex max-w-7xl justify-end pr-1 sm:pr-4">
        <div className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-white/96 px-3.5 py-1.5 text-[10px] font-bold uppercase text-navy shadow-premium backdrop-blur-md sm:px-4 sm:py-2">
          <BadgeCheck className="h-3.5 w-3.5 text-gold" />
          <span>Autorizado</span>
          <span className="h-5 w-px bg-navy/15" />
          <img src={caixaLogo} alt="Caixa" className="h-6 w-auto sm:h-7" />
        </div>
      </div>
    </header>
  );
}
