import { Instagram, Mail, MessageCircle } from "lucide-react";
import orbixEmblemGold from "@/assets/orbix-emblem-gold-transparent.png";

const WHATSAPP_URL =
  "https://wa.me/5516981595005?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Orbix%20sobre%20cr%C3%A9dito%20imobili%C3%A1rio";
const PHONE_LABEL = "(16) 98159-5005";
const EMAIL = "contato@souorbix.com.br";
const INSTAGRAM = "@sou.orbix";

const footerLinks = [
  ["Home", "/#top"],
  ["Simulador", "/#simulador"],
  ["Esteira", "/#esteira"],
  ["App", "/#app"],
  ["Blog/FAQ", "/blog"],
  ["Vagas", "/vagas"],
  ["Contato", "/contato"],
];

export function OrbixFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <img src={orbixEmblemGold} alt="" className="h-11 w-11 object-contain" />
              <span className="text-2xl font-extrabold tracking-[0.18em] text-gold">ORBIX</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/64">
              Crédito imobiliário com tecnologia, atendimento consultivo e esteira organizada para
              compradores, investidores e parceiros.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-bold uppercase text-gold">
              <span className="rounded-full border border-gold/25 px-3 py-1">Caixa</span>
              <span className="rounded-full border border-gold/25 px-3 py-1">MCMV</span>
              <span className="rounded-full border border-gold/25 px-3 py-1">SBPE</span>
              <span className="rounded-full border border-gold/25 px-3 py-1">Consórcio</span>
            </div>
          </div>

          <div className="grid gap-5 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                Navegação
              </div>
              <ul className="mt-3 grid gap-2 text-sm font-semibold text-white/66">
                {footerLinks.map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-gold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                Contato
              </div>
              <div className="mt-3 space-y-3 text-sm font-semibold text-white/72">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-gold" /> {PHONE_LABEL}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2.5 transition hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" /> {EMAIL}
                </a>
                <a
                  href="https://www.instagram.com/sou.orbix"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition hover:text-gold"
                >
                  <Instagram className="h-4 w-4 shrink-0 text-gold" /> {INSTAGRAM}
                </a>
              </div>
            </div>

            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold">
                Unidades
              </div>
              <div className="mt-3 space-y-2 text-sm font-semibold text-white/68">
                <div>
                  <span className="font-bold text-white">Matriz</span>
                  <span className="block">Ribeirão Preto/SP</span>
                </div>
                <div>
                  <span className="font-bold text-white">Filial</span>
                  <span className="block">São Paulo/SP</span>
                </div>
                <div>
                  <span className="font-bold text-white">Atuação</span>
                  <span className="block">Nível nacional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hairline-gold opacity-60" />
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-center sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="max-w-3xl text-[11px] leading-relaxed text-white/48">
          © {new Date().getFullYear()} Orbix Crédito Imobiliário. Simulações são estimativas e
          dependem de análise oficial, documentação, regras vigentes e aprovação da instituição
          financeira.
        </div>
        <a
          href="https://obx-bpo.com.br"
          target="_blank"
          rel="noreferrer"
          className="mx-auto inline-flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/62 transition hover:border-gold/50 hover:text-white lg:mx-0"
          aria-label="Homologado OBX BPO"
        >
          <span>Homologado</span>
          <span className="h-5 w-px bg-white/12" />
          <span className="inline-flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#e2c56f] to-[#9c7b2f] text-sm font-extrabold leading-none text-navy-deep shadow-gold-glow">
              o
            </span>
            <span className="text-base font-extrabold leading-none text-white">
              OBX <span className="text-gold">BPO</span>
            </span>
          </span>
        </a>
      </div>
    </footer>
  );
}
