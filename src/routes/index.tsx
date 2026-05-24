import { createFileRoute } from "@tanstack/react-router";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  Gauge,
  Landmark,
  LockKeyhole,
  MessageCircle,
  Radar,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { OrbixNav } from "@/components/orbix-nav";
import { OrbixFooter } from "@/components/orbix-footer";
import caixaLogo from "@/assets/caixa-logo-official.svg";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import heroBuilding from "@/assets/hero-building.jpg";
import orbixFacadeWide from "@/assets/orbix-fachada-wide.webp";
import orbixAppMonitoring from "@/assets/orbix-app-monitoramento.webp";
import movixWomanPhone from "@/assets/orbix-movix-style-woman-phone.webp";
import orbixEmblemGold from "@/assets/orbix-emblem-gold-transparent.png";
import orbixLogoGold from "@/assets/orbix-logo-gold-transparent.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orbix | Crédito imobiliário com inteligência operacional" },
      {
        name: "description",
        content:
          "A Orbix conduz crédito imobiliário com tecnologia, estratégia bancária e atendimento especializado para operações Caixa.",
      },
      { property: "og:title", content: "Orbix | Crédito imobiliário inteligente" },
      {
        property: "og:description",
        content:
          "Simule, organize documentos e conduza seu financiamento imobiliário com uma esteira moderna de crédito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroArchitecture },
    ],
  }),
  component: OrbixSite,
});

const WHATSAPP_URL =
  "https://wa.me/5516981595005?text=Ol%C3%A1%2C%20quero%20falar%20com%20um%20especialista%20Orbix%20sobre%20cr%C3%A9dito%20imobili%C3%A1rio";

const money = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

type Mode = "income" | "property";
type Product = "mcmv" | "sbpe";

function OrbixSite() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <OrbixNav />
      <Hero />
      <ProofBar />
      <Simulator />
      <Authority />
      <CaixaPresence />
      <Operation />
      <BrandFacade />
      <BrokerApp />
      <Consortium />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-navy-deep text-white">
      <img
        src={heroArchitecture}
        alt="Prédio residencial moderno ao entardecer"
        className="absolute inset-y-0 right-0 hidden h-full w-[56%] object-cover opacity-95 lg:block"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--navy-deep)_0%,var(--navy)_44%,rgba(29,55,78,0.38)_100%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-[58%] bg-[linear-gradient(90deg,var(--navy)_0%,rgba(29,55,78,0.45)_34%,rgba(29,55,78,0.10)_100%)] lg:block" />
      <div className="absolute inset-0 grid-fine opacity-25 invert" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-32 sm:px-8 lg:pb-16">
        <div className="max-w-5xl">
          <img
            src={orbixLogoGold}
            alt="Orbix Crédito Imobiliário"
            className="mt-7 w-full max-w-[760px] rounded-sm"
          />
          <p className="mt-7 max-w-3xl text-2xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Crédito imobiliário com <span className="text-gold">presença,</span> estratégia e
            resultado.
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
            Estrutura completa, atendimento consultivo e soluções inteligentes para realizar seu
            sonho, proteger seu investimento e avançar com segurança.
          </p>

          <div className="mt-9 grid max-w-[620px] gap-3 sm:grid-cols-2">
            <a
              href="#simulador"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/70 px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-gold shadow-gold-glow transition hover:bg-gold hover:text-navy-deep"
            >
              Simular financiamento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/70 px-6 py-3.5 text-center text-sm font-extrabold uppercase tracking-[0.12em] text-gold shadow-gold-glow transition hover:bg-gold hover:text-navy-deep"
            >
              Falar com especialista
              <MessageCircle className="h-4 w-4 transition group-hover:scale-105" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofBar() {
  const items = [
    ["Crédito Caixa", "jornada organizada do primeiro contato à assinatura"],
    ["Minha Casa Minha Vida", "leitura de renda, subsídio e enquadramento"],
    ["SBPE", "simulações claras para imóveis e investimentos"],
    ["Consórcio", "estratégia de lance e acompanhamento da contemplação"],
    ["App Orbix", "monitoramento da proposta em tempo real"],
    ["Atuação nacional", "matriz em Ribeirão Preto e unidade em São Paulo"],
  ];
  const tickerItems = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-gold/25 bg-navy-deep text-white">
      <div className="orbix-marquee flex w-max gap-4 py-5">
        {tickerItems.map(([value, label], index) => (
          <div
            key={`${value}-${index}`}
            className="group flex min-w-[340px] items-center gap-5 rounded-full border border-gold/25 bg-white/[0.06] px-6 py-4 shadow-quiet backdrop-blur-md sm:min-w-[460px]"
          >
            <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-gold shadow-gold-glow" />
            <div>
              <div className="font-display text-xl font-extrabold text-gold sm:text-2xl">
                {value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase text-white/62">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function pricePMT(pv: number, annualRate: number, months: number) {
  const i = annualRate / 12;
  if (pv <= 0 || months <= 0 || i <= 0) return 0;
  return (pv * i) / (1 - Math.pow(1 + i, -months));
}

function pricePV(payment: number, annualRate: number, months: number) {
  const i = annualRate / 12;
  if (payment <= 0 || months <= 0 || i <= 0) return 0;
  return (payment * (1 - Math.pow(1 + i, -months))) / i;
}

function Simulator() {
  const [product, setProduct] = useState<Product>("mcmv");
  const [mode, setMode] = useState<Mode>("income");
  const [income, setIncome] = useState(8000);
  const [propertyValue, setPropertyValue] = useState(420000);
  const [term, setTerm] = useState(360);

  const mcmvRange = useMemo(() => {
    if (income <= 2640) return { name: "Faixa 1", rate: 0.0466 };
    if (income <= 4400) return { name: "Faixa 2", rate: 0.0616 };
    if (income <= 8000) return { name: "Faixa 3", rate: 0.0816 };
    return { name: "Faixa 4", rate: 0.1016 };
  }, [income]);

  const annualRate = product === "sbpe" ? 0.1074 : mcmvRange.rate;

  const result = useMemo(() => {
    if (mode === "income") {
      const payment = income * 0.3;
      return {
        financed: pricePV(payment, annualRate, term),
        payment,
        requiredIncome: income,
      };
    }

    const payment = pricePMT(propertyValue, annualRate, term);
    return {
      financed: propertyValue,
      payment,
      requiredIncome: payment / 0.3,
    };
  }, [annualRate, income, mode, propertyValue, term]);

  return (
    <section id="simulador" className="relative overflow-hidden bg-paper py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionIntro
          eyebrow="Simulador Orbix"
          title={
            <>
              Simule, entenda e avance com mais <span className="text-gold">segurança.</span>
            </>
          }
          text="O simulador é só o começo da jornada. A Orbix transforma a estimativa em uma conversa consultiva sobre renda, modalidade, documentos, enquadramento Caixa, Minha Casa Minha Vida e SBPE."
        />

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-border bg-white shadow-premium lg:grid-cols-12">
          <div className="bg-navy-aurora p-6 text-white sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-4">
              <img src={orbixLogoGold} alt="Orbix" className="h-12 w-auto" />
              <div className="rounded-full border border-white/15 px-3 py-1 text-[11px] font-bold uppercase text-white/70">
                Caixa em foco
              </div>
            </div>

            <div className="mt-10 text-[11px] font-bold uppercase text-white/50">
              Resultado Orbix
            </div>
            <div className="mt-3 font-display text-5xl leading-none text-grad-gold sm:text-6xl">
              {mode === "income" ? money(result.financed) : money(result.requiredIncome)}
            </div>
            <div className="mt-3 text-sm font-medium text-white/72">
              {mode === "income"
                ? "Valor financiável estimado a partir da renda informada."
                : "Renda familiar mínima estimada para o imóvel pretendido."}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Metric label="Parcela" value={money(result.payment)} />
              <Metric label="Prazo" value={`${term} meses`} />
              <Metric label="Produto" value={product === "sbpe" ? "SBPE Caixa" : "Minha Casa"} />
              <Metric
                label="Taxa nominal"
                value={`${(annualRate * 100).toFixed(2).replace(".", ",")}% a.a.`}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-relaxed text-white/68">
              Simulação estimativa. Aprovação, taxa final, enquadramento e eventual subsídio
              dependem da análise oficial e das regras vigentes.
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              {(["mcmv", "sbpe"] as Product[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={product === item}
                  onClick={() => setProduct(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    product === item
                      ? "bg-navy text-white shadow-quiet"
                      : "border border-border bg-white text-steel hover:text-navy"
                  }`}
                >
                  {item === "sbpe" ? "SBPE Caixa" : "Minha Casa Minha Vida"}
                </button>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ModeButton
                active={mode === "income"}
                icon={<CircleDollarSign />}
                title="Tenho renda"
                text="Calcular quanto posso financiar"
                onClick={() => setMode("income")}
              />
              <ModeButton
                active={mode === "property"}
                icon={<Building2 />}
                title="Tenho imóvel"
                text="Calcular renda necessária"
                onClick={() => setMode("property")}
              />
            </div>

            <div className="mt-8 space-y-7">
              {mode === "income" ? (
                <Field
                  label="Renda familiar mensal"
                  value={money(income)}
                  min={1500}
                  max={40000}
                  raw={income}
                  step={100}
                  onChange={setIncome}
                />
              ) : (
                <Field
                  label="Valor do imóvel pretendido"
                  value={money(propertyValue)}
                  min={120000}
                  max={2000000}
                  raw={propertyValue}
                  step={5000}
                  onChange={setPropertyValue}
                />
              )}

              <Field
                label="Prazo de financiamento"
                value={`${term} meses | ${Math.round(term / 12)} anos`}
                min={120}
                max={420}
                raw={term}
                step={12}
                onChange={setTerm}
              />
            </div>

            {product === "mcmv" && (
              <div className="mt-7 rounded-2xl border border-gold/35 bg-gold-soft/40 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] font-bold uppercase text-steel">
                    Enquadramento indicativo
                  </div>
                  <div className="font-display text-xl text-navy">{mcmvRange.name}</div>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  O Minha Casa Minha Vida pode envolver subsídio e regras adicionais. A Orbix
                  organiza a análise, mas a decisão final é sempre oficial.
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-navy-deep"
              >
                Falar com especialista <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#metodo"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold text-navy transition hover:border-gold"
              >
                Ver método Orbix
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeButton({
  active,
  icon,
  title,
  text,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left transition ${
        active
          ? "border-navy bg-navy-soft shadow-quiet"
          : "border-border bg-white hover:border-gold/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-navy shadow-quiet">
          <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
        </div>
        <div>
          <div className="font-display text-xl text-ink">{title}</div>
          <div className="text-sm text-steel">{text}</div>
        </div>
      </div>
    </button>
  );
}

function Field({
  label,
  value,
  min,
  max,
  step,
  raw,
  onChange,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  raw: number;
  onChange: (value: number) => void;
}) {
  const progress = ((raw - min) / (max - min)) * 100;
  const style = { "--p": `${progress}%` } as CSSProperties;

  return (
    <label className="block">
      <div className="flex items-end justify-between gap-4">
        <span className="text-sm font-bold text-steel">{label}</span>
        <span className="font-display text-3xl text-navy">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={raw}
        onChange={(event) => onChange(Number(event.target.value))}
        className="orbix-range mt-4"
        style={style}
      />
    </label>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
      <div className="text-[10px] font-bold uppercase text-white/48">{label}</div>
      <div className="mt-1 font-display text-xl text-white">{value}</div>
    </div>
  );
}

function Authority() {
  const pillars = [
    {
      icon: <Radar />,
      title: "Pré-análise",
      text: "Renda, objetivo, imóvel e viabilidade antes do próximo passo.",
    },
    {
      icon: <Workflow />,
      title: "Documentos",
      text: "Conferência e organização para reduzir idas e vindas.",
    },
    {
      icon: <Landmark />,
      title: "Enquadramento Caixa",
      text: "Leitura técnica para MCMV, SBPE e melhor caminho possível.",
    },
    {
      icon: <LockKeyhole />,
      title: "Aprovação",
      text: "Pendências e evolução acompanhadas com clareza.",
    },
  ];

  return (
    <section id="metodo" className="relative overflow-hidden bg-ice py-14 sm:py-20">
      <div className="absolute inset-0 grid-fine opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="eyebrow">Quem somos</div>
            <h2 className="mt-3 max-w-2xl text-4xl text-ink sm:text-6xl">
              Crédito com <span className="text-gold">método</span>, tecnologia e acompanhamento.
            </h2>
          </div>
          <div className="rounded-[1.75rem] border border-gold/25 bg-navy p-6 text-white shadow-premium">
            <p className="text-lg leading-relaxed text-white/78">
              A Orbix organiza a jornada do financiamento imobiliário: analisa, enquadra, acompanha
              documentos e deixa cada etapa mais clara para compradores, investidores e parceiros.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase text-gold">
              <span className="rounded-full border border-gold/30 px-3 py-1.5">Caixa</span>
              <span className="rounded-full border border-gold/30 px-3 py-1.5">MCMV</span>
              <span className="rounded-full border border-gold/30 px-3 py-1.5">SBPE</span>
              <span className="rounded-full border border-gold/30 px-3 py-1.5">Acompanhamento</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="interactive-card surface-card group rounded-[1.35rem] p-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-gold group-hover:text-navy">
                  <span className="[&>svg]:h-5 [&>svg]:w-5">{pillar.icon}</span>
                </div>
                <div className="font-display text-3xl text-gold/80">0{index + 1}</div>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Operation() {
  const steps = [
    [
      "01",
      "Simulação",
      "A Orbix ajuda você a simular o financiamento, comparar condições e entender o melhor caminho para avançar.",
    ],
    [
      "02",
      "Análise de crédito",
      "Organizamos a documentação e apoiamos a leitura da linha de financiamento mais adequada ao seu perfil.",
    ],
    [
      "03",
      "Análise do imóvel",
      "Com os documentos em andamento, acompanhamos a etapa de avaliação do imóvel e a evolução da proposta.",
    ],
    [
      "04",
      "Contrato e registro",
      "Depois das avaliações, vem a assinatura do contrato, registro em cartório e liberação do crédito ao vendedor.",
    ],
  ];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveStep((step) => (step + 1) % steps.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [steps.length]);

  return (
    <section id="esteira" className="overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-[11px] font-bold uppercase text-gold">Esteira de crédito</div>
            <h2 className="mt-3 max-w-3xl text-4xl sm:text-6xl">
              Passo a passo para comprar seu imóvel com{" "}
              <span className="text-gold">mais clareza.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-white/68">
              Seguimos a lógica da jornada Caixa e colocamos acompanhamento humano e tecnologia em
              cada etapa: simulação, análise de crédito, avaliação do imóvel, contrato e registro.
            </p>
          </div>
          <div className="shrink-0 rounded-2xl border border-gold/30 bg-white/[0.04] px-5 py-4 shadow-gold-glow sm:px-6">
            <img
              src={orbixLogoGold}
              alt="Orbix"
              className="h-auto w-[220px] max-w-full object-contain sm:w-[280px] lg:w-[320px]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map(([number, title, text], index) => {
            const active = activeStep === index;

            return (
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setActiveStep(index)}
                key={number}
                className={`group min-h-56 rounded-[1.5rem] border p-5 text-left transition ${
                  active
                    ? "border-gold bg-gold text-navy-deep shadow-gold-glow"
                    : "border-white/10 bg-white/[0.04] hover:border-gold/55 hover:bg-white/[0.07]"
                }`}
              >
                <div
                  className={`font-display text-5xl transition ${
                    active ? "text-navy-deep/35" : "text-white/16 group-hover:text-gold"
                  }`}
                >
                  {number}
                </div>
                <h3 className="mt-8 font-display text-2xl">{title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${active ? "text-navy-deep/75" : "text-white/64"}`}
                >
                  {text}
                </p>
                <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/15">
                  <div
                    className={`h-full rounded-full ${active ? "animate-step-fill bg-navy" : "bg-transparent"}`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaixaPresence() {
  return (
    <section
      id="caixa"
      className="bg-[linear-gradient(180deg,var(--paper-2)_0%,#fff_48%,var(--paper-2)_100%)] py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-premium">
            <img
              src={movixWomanPhone}
              alt="Atendimento digital Orbix"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="bg-navy p-5 text-white sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-2xl bg-white px-4 py-3 shadow-quiet">
                  <img src={caixaLogo} alt="Caixa" className="h-9 w-auto" />
                </div>
                <div className="h-px flex-1 bg-gold/45" />
                <img src={orbixLogoGold} alt="Orbix" className="h-14 w-auto max-w-[180px]" />
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/35 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
                <BadgeCheck className="h-3.5 w-3.5" />
                Autorizado Caixa
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="eyebrow">Caixa + Orbix</div>
          <h2 className="mt-3 text-4xl text-ink sm:text-6xl">
            Mais <span className="text-gold">crédito aprovado.</span> Mais segurança para avançar.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-steel">
            A Orbix conecta atendimento humano, esteira operacional e conhecimento Caixa para dar
            mais previsibilidade ao financiamento.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <TrustItem icon={<BadgeCheck />} text="Minha Casa Minha Vida e SBPE" />
            <TrustItem icon={<FileCheck2 />} text="Documentos sem ruído" />
            <TrustItem icon={<Clock3 />} text="Processo visível para todos" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandFacade() {
  return (
    <section id="presenca" className="bg-navy-deep px-5 py-12 text-white sm:px-8 sm:py-16">
      <div className="facade-soft-edge relative mx-auto max-w-[980px] overflow-hidden rounded-[1.75rem] shadow-premium">
        <img
          src={orbixFacadeWide}
          alt="Fachada Orbix Crédito Imobiliário"
          className="aspect-[16/8.5] w-full object-cover object-center opacity-90"
        />
      </div>
    </section>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="interactive-card flex items-center gap-3 rounded-2xl border border-gold/20 bg-white p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/35 text-gold">
        <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      </div>
      <div className="text-sm font-semibold text-ink">{text}</div>
    </div>
  );
}

function BrokerApp() {
  return (
    <section id="app" className="overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="eyebrow text-gold">App de acompanhamento</div>
          <h2 className="mt-3 text-4xl sm:text-6xl">
            Esteira <span className="text-gold">visível</span> para parceiros.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/68">
            Clientes e parceiros acompanham status, pendências e evolução do crédito com mais
            clareza.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <TrustItemDark icon={<Gauge />} text="Status da operação" />
            <TrustItemDark icon={<FileCheck2 />} text="Pendências organizadas" />
            <TrustItemDark icon={<Workflow />} text="Esteira monitorada" />
            <TrustItemDark icon={<ShieldCheck />} text="Mais previsibilidade" />
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <img
            src={orbixEmblemGold}
            alt=""
            className="absolute -right-20 -top-16 w-80 opacity-20 mix-blend-screen"
          />
          <div className="relative mx-auto max-w-[280px] rounded-[2.2rem] border border-gold/30 bg-white/5 p-3 shadow-premium">
            <img
              src={orbixAppMonitoring}
              alt="App Orbix de acompanhamento de crédito imobiliário"
              className="rounded-[1.8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItemDark({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="interactive-card flex items-center gap-3 rounded-2xl border border-gold/25 bg-white/[0.06] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/45 text-gold">
        <span className="[&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      </div>
      <div className="text-sm font-semibold text-white/82">{text}</div>
    </div>
  );
}

function Consortium() {
  const items = [
    ["Sem juros de financiamento", "Carta de crédito, taxa de administração e planejamento."],
    ["Estratégia de lance", "Leitura de lance livre, fixo e momento de contemplação."],
    ["Pós-lance acompanhado", "Documentos, prazos e uso do crédito após contemplação."],
  ];

  return (
    <section id="consorcio" className="bg-ice py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <div className="eyebrow">Consórcio imobiliário</div>
          <h2 className="mt-3 text-4xl text-ink sm:text-6xl">
            Uma <span className="text-gold">rota patrimonial</span> para comprar com planejamento.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            O consórcio não é o foco principal da Orbix, mas pode fazer sentido para quem quer
            comprar sem juros de financiamento e tem tempo para uma estratégia de contemplação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contato"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-navy-deep"
            >
              Falar sobre consórcio <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold text-navy transition hover:border-gold"
            >
              Ler no blog
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-[2rem] bg-navy text-white shadow-premium">
            <img
              src={heroBuilding}
              alt="Imóvel premium para estratégia patrimonial com consórcio"
              className="aspect-[16/10] w-full object-cover"
            />
            <div className="grid gap-3 p-5 sm:p-6">
              {items.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                  <h3 className="font-display text-xl">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-navy-deep px-5 py-16 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-8 shadow-premium sm:p-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <img src={orbixLogoGold} alt="Orbix" className="h-14 w-fit" />
            <h2 className="mt-8 max-w-4xl text-4xl sm:text-6xl">
              Transforme seu plano em <span className="text-gold">aprovação</span> com uma esteira
              completa de crédito.
            </h2>
            <p className="mt-5 max-w-2xl text-white/68">
              Simule agora ou fale com um especialista para aproximar seu imóvel, seu investimento
              ou seu sonho de uma rota clara até a aprovação.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a
              href="#simulador"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-gold transition hover:bg-gold hover:text-navy-deep"
            >
              Simular agora <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-gold"
            >
              WhatsApp Orbix
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <OrbixFooter />;
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-white shadow-premium transition hover:bg-navy-deep"
    >
      <MessageCircle className="h-4 w-4 text-gold" />
      Orbix
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="mt-3 text-4xl text-ink sm:text-6xl">{title}</h2>
      <p className="mt-5 text-lg leading-relaxed text-steel">{text}</p>
    </div>
  );
}
