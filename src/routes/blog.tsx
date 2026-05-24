import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FileCheck2, Home, Landmark, Scale } from "lucide-react";
import { OrbixFooter } from "@/components/orbix-footer";
import { OrbixNav } from "@/components/orbix-nav";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      {
        title:
          "FAQ Orbix | Correspondente Caixa, financiamento imobiliario, FGTS e consorcio",
      },
      {
        name: "description",
        content:
          "Perguntas frequentes sobre correspondente Caixa, renda para financiar imovel, FGTS, ITBI, cartorio, consorcio imobiliario e assessoria em credito imobiliario.",
      },
      { name: "keywords", content: "correspondente Caixa, credito imobiliario, financiamento imobiliario, Minha Casa Minha Vida, SBPE Caixa, renda para financiar imovel, FGTS imovel, consorcio imobiliario, ITBI, registro em cartorio, assessoria em credito imobiliario" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    icon: <Home />,
    title: "Minha Casa Minha Vida: o que observar antes de simular",
    summary:
      "Renda, tipo de imóvel, documentação e localização impactam enquadramento, taxas, subsídio e condições.",
    points: [
      "A análise considera renda familiar, localização do imóvel e regras vigentes.",
      "O enquadramento muda conforme perfil, faixa de renda, imóvel e documentação.",
      "A Orbix ajuda a organizar a jornada antes de a proposta avançar.",
    ],
  },
  {
    icon: <Landmark />,
    title: "Correspondente Caixa: como funciona na compra do imóvel",
    summary:
      "O correspondente Caixa apoia a jornada do comprador, orienta documentação, simula cenários e acompanha a proposta até as etapas finais.",
    points: [
      "A aprovação de crédito continua sendo feita pela instituição financeira.",
      "O atendimento ajuda o comprador a entender renda, entrada, prazo e enquadramento.",
      "A Orbix atua com assessoria em crédito imobiliário e organiza a esteira do processo.",
    ],
  },
  {
    icon: <BadgeCheck />,
    title: "Quanto preciso ter de renda para comprar um imóvel financiado?",
    summary:
      "A renda necessária depende do valor do imóvel, entrada, prazo, taxas, perfil do comprador e comprometimento mensal permitido.",
    points: [
      "Não existe uma renda única para todos os casos; a simulação precisa ser personalizada.",
      "Uma entrada maior pode reduzir parcela, risco e necessidade de renda comprovada.",
      "FGTS, subsídio e composição de renda familiar podem mudar o cenário.",
    ],
  },
  {
    icon: <Landmark />,
    title: "SBPE Caixa: quando a operação precisa de mais estratégia",
    summary:
      "Para imóveis e perfis fora do MCMV, a simulação precisa olhar renda, prazo, entrada e risco documental.",
    points: [
      "A simulação é ponto de partida, não aprovação.",
      "Documentos incompletos geram retrabalho e atrasam a jornada.",
      "A esteira Orbix dá clareza para comprador, parceiro e imobiliária.",
    ],
  },
  {
    icon: <FileCheck2 />,
    title: "Esteira de crédito: por que financiamento precisa de processo",
    summary: "Sem esteira, o financiamento vira conversa solta, arquivo perdido e retorno manual.",
    points: [
      "Pré-análise evita avanço sem rota clara.",
      "Conferência documental reduz pendências recorrentes.",
      "Acompanhamento melhora previsibilidade até a assinatura.",
    ],
  },
  {
    icon: <FileCheck2 />,
    title: "ITBI, registro em cartório e despachante imobiliário",
    summary:
      "Depois da aprovação do crédito, a compra também envolve contrato, ITBI, registro em cartório e conferência documental.",
    points: [
      "O ITBI é um imposto municipal e varia conforme a cidade e a operação.",
      "O registro em cartório formaliza a transferência e a garantia do financiamento.",
      "A Orbix apoia a organização documental para reduzir atraso e retrabalho.",
    ],
  },
  {
    icon: <Scale />,
    title: "Consórcio imobiliário: compra planejada e estratégia de lance",
    summary:
      "Pode ser alternativa para quem aceita planejamento e quer comprar sem juros tradicionais de financiamento.",
    points: [
      "A contemplação pode ocorrer por sorteio ou lance, conforme regras do grupo.",
      "Taxa de administração e custos do grupo precisam entrar na conta.",
      "Depois do lance, documentação e uso da carta de crédito exigem acompanhamento.",
    ],
  },
  {
    icon: <Home />,
    title: "FGTS alto guardado: como usar para comprar imóvel",
    summary:
      "O FGTS pode ajudar na entrada, amortização, liquidação ou pagamento de parte das prestações, quando as regras são atendidas.",
    points: [
      "O uso depende das regras do trabalhador, do imóvel, da localização e da operação.",
      "Em financiamento, o FGTS pode melhorar a viabilidade da compra.",
      "Em consórcio imobiliário, o FGTS também pode ser analisado para lance ou complemento, conforme regras aplicáveis.",
    ],
  },
];

const seoGuides = [
  {
    title: "Quero comprar um imóvel financiado. Por onde começar?",
    text: "O primeiro passo é entender renda comprovada, entrada disponível, valor do imóvel, uso de FGTS e programa possível, como Minha Casa Minha Vida ou SBPE Caixa. A simulação indica um caminho inicial, mas a aprovação depende da análise oficial.",
  },
  {
    title: "Correspondente Caixa aprova financiamento?",
    text: "O correspondente Caixa não substitui a análise do banco. Ele apoia o comprador na orientação, organização de documentos, simulação, acompanhamento da proposta e comunicação das etapas.",
  },
  {
    title: "Assessoria em crédito imobiliário vale a pena?",
    text: "Vale quando o comprador precisa reduzir dúvidas, evitar pendências e entender alternativas como Caixa, Minha Casa Minha Vida, SBPE, uso de FGTS, composição de renda, consórcio e documentação do imóvel.",
  },
  {
    title: "Como comprar imóvel sem pagar juros de financiamento?",
    text: "Uma alternativa é o consórcio imobiliário. Ele não tem juros de financiamento, mas possui taxa de administração e regras do grupo. A compra depende de contemplação por sorteio ou lance.",
  },
  {
    title: "Posso dar lance com FGTS no consórcio?",
    text: "Em alguns cenários, o FGTS pode ser usado em consórcio imobiliário, inclusive para lance ou complemento da carta, desde que comprador, imóvel e operação atendam às regras vigentes.",
  },
  {
    title: "Despachante para ITBI e registro em cartório",
    text: "Na compra de imóvel, a etapa pós-crédito envolve pagamento de ITBI, assinatura, registro em cartório e conferência de documentos. Uma esteira organizada evita perda de prazo e retrabalho.",
  },
  {
    title: "Tenho FGTS alto guardado. Posso usar como entrada?",
    text: "Em muitos casos o FGTS pode compor a entrada ou reduzir o saldo financiado, desde que as regras do FGTS sejam atendidas. A análise considera comprador, imóvel, localização, finalidade e histórico de uso.",
  },
  {
    title: "Qual a diferença entre financiamento e consórcio?",
    text: "No financiamento, o comprador recebe crédito após aprovação e paga parcelas com juros e encargos. No consórcio, o comprador participa de um grupo e usa a carta após contemplação por sorteio ou lance.",
  },
];

const faq = [
  {
    group: "Financiamento e Caixa",
    items: [
      [
        "A Orbix é correspondente Caixa?",
        "A Orbix atua com operação especializada em crédito imobiliário Caixa, atendimento consultivo e acompanhamento de esteira. A aprovação final do crédito é sempre feita pela instituição financeira.",
      ],
      [
        "A Orbix aprova crédito?",
        "Não. A aprovação é oficial da instituição financeira. A Orbix organiza a jornada, orienta documentos e acompanha as etapas para dar mais clareza ao processo.",
      ],
      [
        "O simulador garante taxa ou aprovação?",
        "Não. Ele apresenta uma estimativa inicial. Taxa, prazo, valor aprovado e condições dependem da análise oficial.",
      ],
      [
        "A Orbix atende Minha Casa Minha Vida?",
        "Sim. Ajudamos na leitura de renda, enquadramento, possibilidade de subsídio, documentação e próximos passos.",
      ],
      [
        "A Orbix atende SBPE Caixa?",
        "Sim. O SBPE exige leitura cuidadosa de renda, entrada, prazo, valor do imóvel e documentação.",
      ],
    ],
  },
  {
    group: "Renda, FGTS e documentação",
    items: [
      [
        "Quanto preciso ter de renda para financiar um imóvel?",
        "Depende do valor do imóvel, entrada, prazo, taxa, idade, perfil de crédito e comprometimento de renda. A simulação personalizada é o melhor começo.",
      ],
      [
        "Autônomo consegue financiar imóvel?",
        "Pode conseguir. A renda pode ser analisada por declaração de Imposto de Renda, extratos, movimentação bancária e outros comprovantes aceitos na análise.",
      ],
      [
        "MEI ou empresário pode comprovar renda?",
        "Pode. Normalmente a documentação envolve Imposto de Renda, pró-labore, extratos, faturamento, contrato social ou documentos equivalentes.",
      ],
      [
        "Posso usar FGTS no financiamento?",
        "Em muitos casos sim, desde que comprador, imóvel e operação atendam às regras vigentes. A análise precisa ser feita caso a caso.",
      ],
      [
        "Quais documentos costumam ser analisados?",
        "Documentos pessoais, comprovantes de renda, estado civil, documentação do imóvel e informações exigidas pela instituição financeira.",
      ],
    ],
  },
  {
    group: "ITBI, cartório e pós-aprovação",
    items: [
      [
        "O que acontece depois que o financiamento é aprovado?",
        "Depois da aprovação, normalmente vêm emissão de contrato, assinaturas, pagamento de ITBI, registro em cartório e liberação conforme regras da operação.",
      ],
      [
        "A Orbix ajuda com ITBI e registro em cartório?",
        "A Orbix orienta a organização documental e acompanha a esteira para que comprador e parceiros tenham clareza sobre pendências, prazos e próximas etapas.",
      ],
      [
        "O que é despachante imobiliário?",
        "Na prática, é o apoio operacional para documentos, protocolos, certidões, ITBI, cartório e acompanhamento de etapas burocráticas da compra do imóvel.",
      ],
    ],
  },
  {
    group: "Consórcio imobiliário",
    items: [
      [
        "Consórcio imobiliário tem juros?",
        "Não há juros de financiamento, mas existem taxa de administração, fundo comum, fundo de reserva quando previsto e demais custos do grupo.",
      ],
      [
        "Como funciona o lance no consórcio?",
        "O lance é uma oferta para tentar antecipar a contemplação. A estratégia depende do grupo, saldo, regras de assembleia e objetivo de compra.",
      ],
      [
        "Posso usar FGTS para lance no consórcio imobiliário?",
        "Pode ser possível em situações que atendam às regras vigentes. É preciso analisar titularidade, imóvel, finalidade, carta e regulamento do grupo.",
      ],
      [
        "A Orbix acompanha pós-lance?",
        "Sim. Ajudamos a organizar documentação, uso da carta de crédito e próximos passos até a compra do imóvel.",
      ],
    ],
  },
  {
    group: "Acompanhamento",
    items: [
      [
        "Clientes conseguem acompanhar o processo?",
        "Sim. A proposta do app é dar visibilidade à esteira, documentos, pendências e evolução do processo.",
      ],
      [
        "A Orbix atende comprador final?",
        "Sim. A Orbix atende compradores, investidores, imobiliárias, construtoras e parceiros.",
      ],
      [
        "A Orbix atende em nível nacional?",
        "Sim. A atuação é nacional, com matriz em Ribeirão Preto/SP e filial em São Paulo/SP.",
      ],
    ],
  },
];

const sources = [
  ["Crédito Imobiliário CAIXA", "https://www.caixa.gov.br/voce/habitacao/paginas/default.aspx"],
  [
    "Minha Casa Minha Vida - Habitação Urbana CAIXA",
    "https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/urbana/paginas/default.aspx",
  ],
  [
    "Perguntas Frequentes Habitação CAIXA",
    "https://www.caixa.gov.br/voce/habitacao/perguntas-frequentes-novos-financiamentos",
  ],
  ["FGTS CAIXA", "https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx"],
];

function BlogPage() {
  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="eyebrow">Central de conteúdo Orbix</div>
            <h1 className="mt-3 text-3xl sm:text-5xl">
              Crédito imobiliário, Caixa, FGTS, consórcio e cartório.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
              Um espaço organizado em duas partes: guias rápidos para aprender e FAQ direto para
              tirar dúvidas antes de comprar seu imóvel.
            </p>
          </div>
          <div className="surface-card rounded-[1.25rem] p-4 lg:col-span-4">
            <div className="grid gap-2 text-sm font-bold text-navy">
              <a href="#guias" className="rounded-xl bg-navy px-4 py-3 text-white">
                Blog: guias práticos
              </a>
              <a href="#faq" className="rounded-xl border border-border bg-white px-4 py-3">
                FAQ: perguntas frequentes
              </a>
              <a href="#fontes" className="rounded-xl border border-border bg-white px-4 py-3">
                Fontes oficiais
              </a>
            </div>
          </div>
        </div>

        <section id="guias" className="mt-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="eyebrow">Blog Orbix</div>
              <h2 className="mt-2 font-display text-2xl text-ink">Guias práticos</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-steel">
              Conteúdos curtos para entender financiamento, correspondente Caixa, FGTS, consórcio,
              ITBI e registro sem bagunça.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="interactive-card surface-card rounded-[1.25rem] p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                <span className="[&>svg]:h-5 [&>svg]:w-5">{post.icon}</span>
              </div>
              <h2 className="mt-5 font-display text-xl">{post.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-steel">{post.summary}</p>
              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-steel">
                {post.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </section>

        <section className="mt-14 rounded-[1.5rem] border border-border bg-white/75 p-5 shadow-quiet sm:p-7">
          <div className="max-w-3xl">
            <div className="eyebrow">Buscas comuns</div>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Respostas diretas para quem está planejando comprar imóvel.
            </h2>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {seoGuides.map((guide) => (
              <article key={guide.title} className="rounded-2xl border border-border bg-white p-4">
                <h3 className="font-display text-lg text-navy">{guide.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{guide.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="mt-14 rounded-[1.5rem] bg-navy p-5 text-white shadow-premium sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-gold">FAQ Orbix</div>
              <h2 className="mt-2 font-display text-2xl">Perguntas frequentes</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Respostas objetivas sobre financiamento, correspondente Caixa, FGTS, ITBI,
              cartório, consórcio e assessoria em crédito imobiliário.
            </p>
          </div>

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {faq.map((section) => (
              <div
                key={section.group}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4"
              >
                <h3 className="font-display text-xl text-gold">{section.group}</h3>
                <div className="mt-4 space-y-3">
                  {section.items.map(([question, answer]) => (
                    <div key={question} className="rounded-2xl bg-white/[0.06] p-4">
                      <h4 className="font-display text-lg">{question}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/68">{answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="fontes" className="mt-12">
          <div className="eyebrow">Fontes oficiais</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {sources.map(([label, href]) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-bold text-navy hover:border-gold"
              >
                {label} <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </section>
      </section>

      <OrbixFooter />
    </main>
  );
}
