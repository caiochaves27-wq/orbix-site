import { createFileRoute } from "@tanstack/react-router";
import { Building2, Instagram, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FormEvent } from "react";
import { OrbixFooter } from "@/components/orbix-footer";
import { OrbixNav } from "@/components/orbix-nav";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato Orbix | Fale com um especialista" },
      {
        name: "description",
        content: "Fale com a Orbix por WhatsApp, e-mail, Instagram ou envie uma mensagem.",
      },
    ],
  }),
  component: ContactPage,
});

const WHATSAPP_BASE = "https://wa.me/5516981595005";
const EMAIL = "contato@souorbix.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/sou.orbix";

function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const profile = String(form.get("profile") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Contato pelo site Orbix - ${name}`);
    const body = encodeURIComponent(
      [
        "Nova mensagem enviada pelo site da Orbix.",
        "",
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `E-mail: ${email}`,
        `Perfil: ${profile}`,
        "",
        "Mensagem:",
        message || "Sem mensagem adicional.",
      ].join("\n"),
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">Contato Orbix</div>
          <h1 className="mt-3 text-3xl sm:text-5xl">Vamos entender sua operação.</h1>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            Comprador, investidor, imobiliária ou construtora: fale com a Orbix para organizar sua
            rota de crédito e avançar com mais segurança.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-gold/25 bg-white p-3.5 shadow-quiet">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gold">
                <MapPin className="h-4 w-4" />
                Matriz
              </div>
              <div className="mt-1 font-display text-lg text-navy">Ribeirão Preto/SP</div>
            </div>
            <div className="rounded-xl border border-gold/25 bg-white p-3.5 shadow-quiet">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gold">
                <Building2 className="h-4 w-4" />
                Filial
              </div>
              <div className="mt-1 font-display text-lg text-navy">São Paulo/SP</div>
            </div>
            <div className="rounded-xl border border-gold/25 bg-white p-3.5 shadow-quiet">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase text-gold">
                <MapPin className="h-4 w-4" />
                Atuação
              </div>
              <div className="mt-1 font-display text-lg text-navy">Nível nacional</div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá, quero falar com a Orbix.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4 text-gold" /> WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-navy"
            >
              <Mail className="h-4 w-4" /> E-mail
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-navy"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="surface-card rounded-[1.5rem] p-5 shadow-premium sm:p-7 lg:col-span-7"
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-steel">Nome</span>
              <input
                name="name"
                required
                className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                placeholder="Seu nome"
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">Telefone</span>
                <input
                  name="phone"
                  type="tel"
                  required
                  className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                  placeholder="(00) 00000-0000"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">E-mail</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                  placeholder="voce@email.com"
                />
              </label>
            </div>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-steel">Perfil</span>
              <select
                name="profile"
                className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
              >
                <option>Comprador</option>
                <option>Corretor</option>
                <option>Imobiliária</option>
                <option>Construtora</option>
                <option>Consórcio</option>
              </select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-steel">Mensagem</span>
              <textarea
                name="message"
                rows={5}
                className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                placeholder="Conte rapidamente o que você precisa."
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy-deep transition hover:bg-navy hover:text-white"
            >
              Enviar para contato@souorbix.com.br <Send className="h-4 w-4" />
            </button>
            <a
              href={`${WHATSAPP_BASE}?text=${encodeURIComponent("Olá, quero falar com a Orbix.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-bold text-navy transition hover:border-gold hover:text-gold"
            >
              Preferir WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </form>
      </section>
      <OrbixFooter />
    </main>
  );
}
