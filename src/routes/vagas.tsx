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
      { title: "Vagas Orbix | Trabalhe com crÃ©dito imobiliÃ¡rio" },
      {
        name: "description",
        content:
          "Vagas abertas na Orbix para crÃ©dito imobiliÃ¡rio, atendimento, consultoria e administrativo.",
      },
    ],
  }),
  component: CareersPage,
});

const RH_EMAIL = "rh@souorbix.com.br";

const jobs = [
  {
    title: "Analista de crÃ©dito imobiliÃ¡rio",
    location: "RibeirÃ£o Preto/SP",
    area: "CrÃ©dito",
    type: "Presencial",
  },
  {
    title: "Assistente de crÃ©dito imobiliÃ¡rio",
    location: "RibeirÃ£o Preto/SP",
    area: "CrÃ©dito",
    type: "Presencial",
  },
  {
    title: "Consultor de crÃ©dito imobiliÃ¡rio",
    location: "RibeirÃ£o Preto/SP",
    area: "Comercial",
    type: "Presencial",
  },
  {
    title: "Assistente administrativo",
    location: "RibeirÃ£o Preto/SP",
    area: "Administrativo",
    type: "Presencial",
  },
  {
    title: "Analista de crÃ©dito imobiliÃ¡rio",
    location: "SÃ£o Paulo/SP",
    area: "CrÃ©dito",
    type: "Presencial",
  },
];

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(jobs[0].title);
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
    const resumeName = fileName || "CurrÃ­culo a anexar";

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
        `LinkedIn/PortfÃ³lio: ${linkedin || "NÃ£o informado"}`,
        `CurrÃ­culo selecionado: ${resumeName}`,
        "",
        "Mensagem:",
        message || "Sem mensagem adicional.",
        "",
        "Anexo: incluir o currÃ­culo antes de enviar este e-mail.",
      ].join("\n"),
    );

    window.location.href = `mailto:${RH_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">Carreiras Orbix</div>
            <h1 className="mt-3 max-w-4xl text-3xl sm:text-5xl">
              Vagas para quem quer crescer no mercado imobiliÃ¡rio.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
              Buscamos pessoas organizadas, consultivas e orientadas a resultado para atuar com
              crÃ©dito imobiliÃ¡rio, atendimento e operaÃ§Ã£o.
            </p>
          </div>
          <div className="surface-card rounded-[1.5rem] p-5 shadow-premium lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase text-steel">Envio de currÃ­culo</div>
                <a href={`mailto:${RH_EMAIL}`} className="font-display text-xl text-navy">
                  {RH_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {jobs.map((job) => (
            <button
              key={`${job.title}-${job.location}`}
              type="button"
              onClick={() => setSelectedJob(job.title)}
              className="interactive-card surface-card rounded-[1.25rem] p-5 text-left"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <BriefcaseBusiness className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-lg text-ink">{job.title}</h2>
              <div className="mt-4 space-y-2 text-sm font-semibold text-steel">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-gold" />
                  {job.area}
                </div>
                <div className="inline-flex rounded-full border border-gold/25 px-3 py-1 text-[11px] uppercase text-navy">
                  {job.type}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <form
            onSubmit={handleSubmit}
            className="surface-card rounded-[1.5rem] p-5 shadow-premium sm:p-7 lg:col-span-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <div className="eyebrow">Envie seu currÃ­culo</div>
                <h2 className="font-display text-2xl text-ink">Candidatura</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">Nome completo</span>
                  <input
                    name="name"
                    required
                    className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                    placeholder="Seu nome"
                  />
                </label>
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
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
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
                <label className="grid gap-2">
                  <span className="text-sm font-bold text-steel">Cidade</span>
                  <input
                    name="city"
                    required
                    className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                    placeholder="RibeirÃ£o Preto/SP"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">Vaga de interesse</span>
                <select
                  name="job"
                  value={selectedJob}
                  onChange={(event) => setSelectedJob(event.target.value)}
                  className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                >
                  {jobs.map((job) => (
                    <option key={`${job.title}-select-${job.location}`}>
                      {job.title} - {job.location}
                    </option>
                  ))}
                  <option>Envie seu currÃ­culo para futuras oportunidades</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">LinkedIn ou portfÃ³lio</span>
                <input
                  name="linkedin"
                  className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                  placeholder="https://..."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-steel">CurrÃ­culo</span>
                <span className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-dashed border-gold/45 bg-white px-4 py-4 text-sm font-bold text-navy transition hover:border-gold">
                  <span className="flex items-center gap-2">
                    <FileUp className="h-4 w-4 text-gold" />
                    {fileName || "Anexar currÃ­culo em PDF, DOC ou DOCX"}
                  </span>
                  <ArrowRight className="h-4 w-4 text-gold" />
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
                  className="rounded-2xl border border-border bg-white px-4 py-3 outline-none focus:border-gold"
                  placeholder="Conte brevemente sua experiÃªncia."
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy-deep transition hover:bg-navy hover:text-white"
              >
                Enviar candidatura <Send className="h-4 w-4" />
              </button>
            </div>
          </form>

          <aside className="rounded-[1.5rem] bg-navy p-5 text-white shadow-premium sm:p-7 lg:col-span-4">
            <div className="text-[11px] font-bold uppercase text-gold">Perfil Orbix</div>
            <h2 className="mt-3 font-display text-2xl">OrganizaÃ§Ã£o, atendimento e ritmo.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/68">
              Valorizamos comunicaÃ§Ã£o clara, cuidado com documentos, leitura de cenÃ¡rio e postura
              consultiva com clientes, parceiros e bancos.
            </p>
            <div className="mt-6 grid gap-2 text-sm font-semibold text-white/72">
              <span className="rounded-full border border-white/10 px-3 py-2">CrÃ©dito imobiliÃ¡rio</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Atendimento consultivo</span>
              <span className="rounded-full border border-white/10 px-3 py-2">Esteira operacional</span>
              <span className="rounded-full border border-white/10 px-3 py-2">DocumentaÃ§Ã£o e prazos</span>
            </div>
          </aside>
        </div>
      </section>

      <OrbixFooter />
    </main>
  );
}
