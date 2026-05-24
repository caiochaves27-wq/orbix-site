import { Instagram, Mail, MessageCircle } from "lucide-react";
import orbixEmblemGold from "@/assets/orbix-emblem-gold-transparent.png";

const WHATSAPP_URL =
  "https://wa.me/5516981595005?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Orbix%20sobre%20cr%C3%A9dito%20imobili%C3%A1rio";
const PHONE_LABEL = "(16) 98159-5005";
const EMAIL = "contato@souorbix.com.br";
const INSTAGRAM = "@sou.orbix";

export function OrbixFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={orbixEmblemGold} alt="" className="h-12 w-12 object-contain" />
            <span className="text-2xl font-extrabold tracking-[0.18em] text-gold">ORBIX</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/68">
            Plataforma de crédito imobiliário com tecnologia, inteligência operacional e
            acompanhamento consultivo para compradores, investidores, imobiliárias e construtoras.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase text-gold">
            <span className="rounded-full border border-gold/30 px-3 py-1.5">Caixa</span>
            <span className="rounded-full border border-gold/30 px-3 py-1.5">MCMV</span>
            <span className="rounded-full border border-gold/30 px-3 py-1.5">SBPE</span>
            <span className="rounded-full border border-gold/30 px-3 py-1.5">Consórcio</span>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] font-bold uppercase text-gold">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm font-semibold text-white/64">
            <li>
              <a href="/#top" className="hover:text-gold">
                Home
              </a>
            </li>
            <li>
              <a href="/#simulador" className="hover:text-gold">
                Simulador
              </a>
            </li>
            <li>
              <a href="/#esteira" className="hover:text-gold">
                Esteira
              </a>
            </li>
            <li>
              <a href="/#app" className="hover:text-gold">
                App
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-gold">
                Blog/FAQ
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-gold">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-[11px] font-bold uppercase text-gold">Unidades</div>
          <div className="mt-4 space-y-2 text-sm font-semibold text-white/68">
            <div>
              <span className="font-bold text-white">Matriz</span> - Ribeirão Preto/SP
            </div>
            <div>
              <span className="font-bold text-white">Filial</span> - São Paulo/SP
            </div>
            <div>
              <span className="font-bold text-white">Atuação</span> - Nível nacional
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-[11px] font-bold uppercase text-gold">Canais oficiais</div>
          <div className="mt-4 space-y-3 text-sm font-semibold text-white/72">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <MessageCircle className="h-4 w-4 text-gold" /> {PHONE_LABEL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" /> {EMAIL}
            </a>
            <a
              href="https://www.instagram.com/sou.orbix"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-gold"
            >
              <Instagram className="h-4 w-4 text-gold" /> {INSTAGRAM}
            </a>
          </div>
        </div>
      </div>

      <div className="hairline-gold opacity-60" />
      <div className="mx-auto max-w-7xl px-5 py-6 text-center sm:px-8">
        <div className="text-[11px] leading-relaxed text-white/48">
          © {new Date().getFullYear()} Orbix Crédito Imobiliário. Simulações são estimativas e
          dependem de análise oficial, documentação, regras vigentes e aprovação da instituição
          financeira.
        </div>
        <a
          href="https://obx-bpo.com.br"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/62 transition hover:border-gold/50 hover:text-white"
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
