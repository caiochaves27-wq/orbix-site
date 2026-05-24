import { useState } from "react";
import { ArrowRight, BadgeCheck, Menu, MessageCircle, X } from "lucide-react";
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
  ["App", "/#app"],
  ["Consórcio", "/#consorcio"],
  ["Blog", "/blog"],
  ["Contato", "/contato"],
];

export function OrbixNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-navy/94 px-4 py-3 shadow-premium backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/45 text-gold transition hover:bg-gold hover:text-navy-deep xl:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="/#top" className="flex items-center gap-2.5" aria-label="Orbix">
            <img
              src={orbixEmblemGold}
              alt=""
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            <span className="text-xl font-extrabold tracking-[0.18em] text-gold sm:text-2xl">
              ORBIX
            </span>
          </a>
        </div>

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
      <div className="pointer-events-none mx-auto mt-2 flex max-w-7xl justify-center sm:mt-3 sm:justify-end sm:pr-4">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white/96 px-3 py-1 text-[9px] font-bold uppercase text-navy shadow-premium backdrop-blur-md sm:gap-2.5 sm:px-4 sm:py-2 sm:text-[10px]">
          <BadgeCheck className="h-3 w-3 text-gold sm:h-3.5 sm:w-3.5" />
          <span>Autorizado</span>
          <span className="h-4 w-px bg-navy/15 sm:h-5" />
          <img src={caixaLogo} alt="Caixa" className="h-5 w-auto sm:h-7" />
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="relative flex h-full w-[84vw] max-w-[340px] flex-col bg-navy-deep px-5 py-5 text-white shadow-premium">
            <div className="flex items-center justify-between gap-4">
              <a
                href="/#top"
                aria-label="Orbix"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img src={orbixEmblemGold} alt="" className="h-10 w-10 object-contain" />
                <span className="text-2xl font-extrabold tracking-[0.18em] text-gold">ORBIX</span>
              </a>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 grid gap-2 text-base font-bold">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/82 transition hover:border-gold/55 hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="mt-auto grid gap-3 pt-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/65 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-gold transition hover:bg-gold hover:text-navy-deep"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <div className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/35 bg-white/95 px-3.5 py-2 text-[10px] font-bold uppercase text-navy">
                <BadgeCheck className="h-3.5 w-3.5 text-gold" />
                <span>Autorizado</span>
                <span className="h-5 w-px bg-navy/15" />
                <img src={caixaLogo} alt="Caixa" className="h-6 w-auto" />
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
