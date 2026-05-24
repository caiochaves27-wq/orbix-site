import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FileUp,
  Mail,
  MapPin,
  Send,
  UserRound,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { OrbixFooter } from "@/components/orbix-footer";
import { OrbixNav } from "@/components/orbix-nav";

export const Route = createFileRoute("/vagas")({
  head: () => ({
    meta: [
      { title: "Vagas Orbix | Trabalhe com credito imobiliario" },
      {
        name: "description",
        content:
          "Vagas abertas na Orbix para credito imobiliario, atendimento, consultoria e administrativo.",
      },
    ],
  }),
  component: CareersPage,
});

const RH_EMAIL = "rh@souorbix.com.br";
const PUBLISHED_AT = "26/05/26";

const jobs = [
  {
    title: "Analista de cr\u00e9dito imobili\u00e1rio",
    location: "Ribeir\u00e3o Preto/SP",
    area: "Cr\u00e9dito",
    type: "Presencial",
    description:
      "Para quem tem olhar anal\u00edtico, organiza documenta\u00e7\u00e3o com cuidado e gosta de conduzir propostas com precis\u00e3o.",
  },
  {
    title: "Assistente de cr\u00e9dito imobili\u00e1rio",
    location: "Ribeir\u00e3o Preto/SP",
    area: "Cr\u00e9dito",
    type: "Presencial",
    description:
      "Uma oportunidade para aprender a esteira imobili\u00e1ria de perto, apoiar clientes e manter cada etapa em movimento.",
  },
  {
    title: "Consultor de cr\u00e9dito imobili\u00e1rio",
    location: "Ribeir\u00e3o Preto/SP",
    area: "Comercial",
    type: "Presencial",
    description:
      "Para perfis comunicativos, consultivos e focados em transformar simula\u00e7\u00f5es em jornadas claras para o cliente.",
  },
  {
    title: "Assistente administrativo",
    location: "Ribeir\u00e3o Preto/SP",
    area: "Administrativo",
    type: "Presencial",
    description:
      "Para quem gosta de rotina organizada, apoio operacional, controle de informa\u00e7\u00f5es e atendimento interno bem feito.",
  },
  {
    title: "Analista de cr\u00e9dito imobili\u00e1rio",
    location: "S\u00e3o Paulo/SP",
    area: "Cr\u00e9dito",
    type: "Presencial",
    description:
      "Atua\u00e7\u00e3o pr\u00f3xima \u00e0 opera\u00e7\u00e3o paulista, com foco em an\u00e1lise, documenta\u00e7\u00e3o e acompanhamento de propostas.",
  },
];

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(`${jobs[0].title} - ${jobs[0].location}`);
  const [fileName, setFileName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const email = String(form.get("email") || "");
    const city = String(form.get("city") || "");
    const job = String(form.get("job") || selectedJob);
    const linkedin = String(form.get("linkedin") || "");
    const message = String(form.get("message") || "");
    const resumeName = fileName || "Curr\u00edculo a anexar";

    const subject = encodeURIComponent(`Candidatura Orbix - ${job} - ${name}`);
    const body = encodeURIComponent(
      [
        "Nova candidatura pelo site da Orbix.",
        "",
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `E-mail: ${email}`,
        `Cidade: ${city}`,
        `Vaga de interesse: ${job}`,
        `LinkedIn/Portf\u00f3lio: ${linkedin || "N\u00e3o informado"}`,
        `Curr\u00edculo selecionado: ${resumeName}`,
        "",
        "Mensagem:",
        message || "Sem mensagem adicional.",
        "",
        "Anexo: incluir o curr\u00edculo antes de enviar este e-mail.",
      ].join("\n"),
    );

    window.location.href = `mailto:${RH_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto max-w-7xl overflow-hidden px-3 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">Carreiras Orbix</div>
            <h1 className="mt-3 max-w-4xl text-3xl sm:text-5xl">
              {"Vagas para quem quer crescer no mercado imobili\u00e1rio."}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
              {
                "Buscamos pessoas organizadas, consultivas e orientadas a resultado para atuar com cr\u00e9dito imobili\u00e1rio, atendimento e opera\u00e7\u00e3o."
              }
            </p>
          </div>
          <div className="surface-card rounded-[1.5rem] p-5 shadow-premium lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase text-steel">
                  {"Envio de curr\u00edculo"}
                </div>
                <a href={`mailto:${RH_EMAIL}`} className="font-display text-xl text-navy">
                  {RH_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-md justify-items-center gap-4 md:max-w-none md:grid-cols-2 xl:grid-cols-5">
          {jobs.map((job) => (
            <button
              key={`${job.title}-${job.location}`}
              type="button"
              onClick={() => setSelectedJob(`${job.title} - ${job.location}`)}
              className="interactive-card surface-card w-full max-w-sm rounded-[1.25rem] p-5 text-left md:max-w-none"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <div className="mt-4 text-[10px] font-bold uppercase text-steel/70">
                Publicada em {PUBLISHED_AT}
              </div>
              <h2 className="mt-2 font-display text-lg text-ink">{job.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{job.description}</p>
              <div className="mt-4 space-y-2 text-sm font-semibold text-steel">
                <div className="flex min-w-0 items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="min-w-0 break-words">{job.location}</span>
                </div>
                <div className="flex min-w-0 items-center gap-2">
                  <Building2 className="h-4 w-4 text-gold" />
                  <span className="min-w-0 break-words">{job.area}</span>
                </div>
                <div className="inline-flex rounded-full border border-gold/25 px-3 py-1 text-[11px] uppercase text-navy">
                  {job.type}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-[calc(100vw-1.5rem)] gap-8 md:max-w-none lg:grid-cols-12">
          <form
            onSubmit={handleSubmit}
            className="surface-card box-border w-full min-w-0 max-w-full overflow-hidden rounded-[1.25rem] p-3.5 shadow-premium sm:rounded-[1.5rem] sm:p-7 lg:col-span-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <div className="eyebrow">{"Envie seu curr\u00edculo"}</div>
                <h2 className="font-display text-2xl text-ink">Candidatura</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">Nome completo</span>
                  <input
                    name="name"
                    required
                    className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">Telefone</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                    placeholder="(00) 00000-0000"
                  />
                </label>
              </div>

              <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">E-mail</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                    placeholder="voce@email.com"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">Cidade</span>
                  <input
                    name="city"
                    required
                    className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                    placeholder="São Paulo/SP"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">Vaga de interesse</span>
                <select
                  name="job"
                  value={selectedJob}
                  onChange={(event) => setSelectedJob(event.target.value)}
                  className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                >
                  {jobs.map((job) => (
                    <option key={`${job.title}-select-${job.location}`}>
                      {job.title} - {job.location}
                    </option>
                  ))}
                  <option>{"Envie seu curr\u00edculo para futuras oportunidades"}</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">{"LinkedIn ou portf\u00f3lio"}</span>
                <input
                  name="linkedin"
                  className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                  placeholder="https://..."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">{"Curr\u00edculo"}</span>
                <span className="box-border flex w-full min-w-0 max-w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-gold/45 bg-white px-3 py-4 text-sm font-bold text-navy transition hover:border-gold sm:px-4">
                  <span className="flex min-w-0 items-center gap-2">
                    <FileUp className="h-4 w-4 text-gold" />
                    <span className="min-w-0 break-words">
                      {fileName || "Anexar curr\u00edculo em PDF, DOC ou DOCX"}
                    </span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="sr-only"
                    onChange={(event) => setFileName(event.target.files?.[0]?.name || "")}
                  />
                </span>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">Mensagem</span>
                <textarea
                  name="message"
                  rows={4}
                  className="box-border w-full min-w-0 max-w-full rounded-2xl border border-border bg-white px-3 py-3 outline-none focus:border-gold sm:px-4"
                  placeholder="Conte brevemente sua experiência."
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full bg-gold px-4 py-3.5 text-sm font-bold text-navy-deep transition hover:bg-navy hover:text-white sm:w-auto sm:px-6"
              >
                Enviar candidatura <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <aside className="box-border w-full min-w-0 max-w-full overflow-hidden rounded-[1.25rem] bg-navy p-3.5 text-white shadow-premium sm:rounded-[1.5rem] sm:p-7 lg:col-span-4">
            <div className="text-[11px] font-bold uppercase text-gold">Perfil Orbix</div>
            <h2 className="mt-3 font-display text-2xl">
              {"Organiza\u00e7\u00e3o, atendimento e ritmo."}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/68">
              {
                "Valorizamos comunicação clara, cuidado com documentos, leitura de cenário e conhecimento da esteira da Caixa Econômica Federal."
              }
            </p>
            <div className="mt-6 grid gap-2 text-sm font-semibold text-white/72">
              <span className="rounded-full border border-white/10 px-3 py-2">
                {"Cr\u00e9dito imobili\u00e1rio"}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-2">
                Atendimento consultivo
              </span>
              <span className="rounded-full border border-white/10 px-3 py-2">
                Esteira operacional
              </span>
              <span className="rounded-full border border-white/10 px-3 py-2">
                {"Documenta\u00e7\u00e3o e prazos"}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <OrbixFooter />
    </main>
  );
}
