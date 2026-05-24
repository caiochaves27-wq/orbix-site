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
      "Renda, tipo de im\u00f3vel, documenta\u00e7\u00e3o e localiza\u00e7\u00e3o impactam enquadramento, taxas, subs\u00eddio e condi\u00e7\u00f5es.",
    points: [
      "A an\u00e1lise considera renda familiar, localiza\u00e7\u00e3o do im\u00f3vel e regras vigentes.",
      "O enquadramento muda conforme perfil, faixa de renda, im\u00f3vel e documenta\u00e7\u00e3o.",
      "A Orbix ajuda a organizar a jornada antes de a proposta avan\u00e7ar.",
    ],
  },
  {
    icon: <Landmark />,
    title: "Correspondente Caixa: como funciona na compra do im\u00f3vel",
    summary:
      "O correspondente Caixa apoia a jornada do comprador, orienta documenta\u00e7\u00e3o, simula cen\u00e1rios e acompanha a proposta at\u00e9 as etapas finais.",
    points: [
      "A aprova\u00e7\u00e3o de cr\u00e9dito continua sendo feita pela institui\u00e7\u00e3o financeira.",
      "O atendimento ajuda o comprador a entender renda, entrada, prazo e enquadramento.",
      "A Orbix atua com assessoria em cr\u00e9dito imobili\u00e1rio e organiza a esteira do processo.",
    ],
  },
  {
    icon: <BadgeCheck />,
    title: "Quanto preciso ter de renda para comprar um im\u00f3vel financiado?",
    summary:
      "A renda necess\u00e1ria depende do valor do im\u00f3vel, entrada, prazo, taxas, perfil do comprador e comprometimento mensal permitido.",
    points: [
      "N\u00e3o existe uma renda \u00fanica para todos os casos; a simula\u00e7\u00e3o precisa ser personalizada.",
      "Uma entrada maior pode reduzir parcela, risco e necessidade de renda comprovada.",
      "FGTS, subs\u00eddio e composi\u00e7\u00e3o de renda familiar podem mudar o cen\u00e1rio.",
    ],
  },
  {
    icon: <Landmark />,
    title: "SBPE Caixa: quando a opera\u00e7\u00e3o precisa de mais estrat\u00e9gia",
    summary:
      "Para im\u00f3veis e perfis fora do MCMV, a simula\u00e7\u00e3o precisa olhar renda, prazo, entrada e risco documental.",
    points: [
      "A simula\u00e7\u00e3o \u00e9 ponto de partida, n\u00e3o aprova\u00e7\u00e3o.",
      "Documentos incompletos geram retrabalho e atrasam a jornada.",
      "A esteira Orbix d\u00e1 clareza para comprador, parceiro e imobili\u00e1ria.",
    ],
  },
  {
    icon: <FileCheck2 />,
    title: "Esteira de cr\u00e9dito: por que financiamento precisa de processo",
    summary: "Sem esteira, o financiamento vira conversa solta, arquivo perdido e retorno manual.",
    points: [
      "Pr\u00e9-an\u00e1lise evita avan\u00e7o sem rota clara.",
      "Confer\u00eancia documental reduz pend\u00eancias recorrentes.",
      "Acompanhamento melhora previsibilidade at\u00e9 a assinatura.",
    ],
  },
  {
    icon: <FileCheck2 />,
    title: "ITBI, registro em cart\u00f3rio e despachante imobili\u00e1rio",
    summary:
      "Depois da aprova\u00e7\u00e3o do cr\u00e9dito, a compra tamb\u00e9m envolve contrato, ITBI, registro em cart\u00f3rio e confer\u00eancia documental.",
    points: [
      "O ITBI \u00e9 um imposto municipal e varia conforme a cidade e a opera\u00e7\u00e3o.",
      "O registro em cart\u00f3rio formaliza a transfer\u00eancia e a garantia do financiamento.",
      "A Orbix apoia a organiza\u00e7\u00e3o documental para reduzir atraso e retrabalho.",
    ],
  },
  {
    icon: <Scale />,
    title: "Cons\u00f3rcio imobili\u00e1rio: compra planejada e estrat\u00e9gia de lance",
    summary:
      "Pode ser alternativa para quem aceita planejamento e quer comprar sem juros tradicionais de financiamento.",
    points: [
      "A contempla\u00e7\u00e3o pode ocorrer por sorteio ou lance, conforme regras do grupo.",
      "Taxa de administra\u00e7\u00e3o e custos do grupo precisam entrar na conta.",
      "Depois do lance, documenta\u00e7\u00e3o e uso da carta de cr\u00e9dito exigem acompanhamento.",
    ],
  },
  {
    icon: <Home />,
    title: "FGTS alto guardado: como usar para comprar im\u00f3vel",
    summary:
      "O FGTS pode ajudar na entrada, amortiza\u00e7\u00e3o, liquida\u00e7\u00e3o ou pagamento de parte das presta\u00e7\u00f5es, quando as regras s\u00e3o atendidas.",
    points: [
      "O uso depende das regras do trabalhador, do im\u00f3vel, da localiza\u00e7\u00e3o e da opera\u00e7\u00e3o.",
      "Em financiamento, o FGTS pode melhorar a viabilidade da compra.",
      "Em cons\u00f3rcio imobili\u00e1rio, o FGTS tamb\u00e9m pode ser analisado para lance ou complemento, conforme regras aplic\u00e1veis.",
    ],
  },
];

const seoGuides = [
  {
    title: "Quero comprar um im\u00f3vel financiado. Por onde come\u00e7ar?",
    text: "O primeiro passo \u00e9 entender renda comprovada, entrada dispon\u00edvel, valor do im\u00f3vel, uso de FGTS e programa poss\u00edvel, como Minha Casa Minha Vida ou SBPE Caixa. A simula\u00e7\u00e3o indica um caminho inicial, mas a aprova\u00e7\u00e3o depende da an\u00e1lise oficial.",
  },
  {
    title: "Correspondente Caixa aprova financiamento?",
    text: "O correspondente Caixa n\u00e3o substitui a an\u00e1lise do banco. Ele apoia o comprador na orienta\u00e7\u00e3o, organiza\u00e7\u00e3o de documentos, simula\u00e7\u00e3o, acompanhamento da proposta e comunica\u00e7\u00e3o das etapas.",
  },
  {
    title: "Assessoria em cr\u00e9dito imobili\u00e1rio vale a pena?",
    text: "Vale quando o comprador precisa reduzir d\u00favidas, evitar pend\u00eancias e entender alternativas como Caixa, Minha Casa Minha Vida, SBPE, uso de FGTS, composi\u00e7\u00e3o de renda, cons\u00f3rcio e documenta\u00e7\u00e3o do im\u00f3vel.",
  },
  {
    title: "Como comprar im\u00f3vel sem pagar juros de financiamento?",
    text: "Uma alternativa \u00e9 o cons\u00f3rcio imobili\u00e1rio. Ele n\u00e3o tem juros de financiamento, mas possui taxa de administra\u00e7\u00e3o e regras do grupo. A compra depende de contempla\u00e7\u00e3o por sorteio ou lance.",
  },
  {
    title: "Posso dar lance com FGTS no cons\u00f3rcio?",
    text: "Em alguns cen\u00e1rios, o FGTS pode ser usado em cons\u00f3rcio imobili\u00e1rio, inclusive para lance ou complemento da carta, desde que comprador, im\u00f3vel e opera\u00e7\u00e3o atendam \u00e0s regras vigentes.",
  },
  {
    title: "Despachante para ITBI e registro em cart\u00f3rio",
    text: "Na compra de im\u00f3vel, a etapa p\u00f3s-cr\u00e9dito envolve pagamento de ITBI, assinatura, registro em cart\u00f3rio e confer\u00eancia de documentos. Uma esteira organizada evita perda de prazo e retrabalho.",
  },
  {
    title: "Tenho FGTS alto guardado. Posso usar como entrada?",
    text: "Em muitos casos o FGTS pode compor a entrada ou reduzir o saldo financiado, desde que as regras do FGTS sejam atendidas. A an\u00e1lise considera comprador, im\u00f3vel, localiza\u00e7\u00e3o, finalidade e hist\u00f3rico de uso.",
  },
  {
    title: "Qual a diferen\u00e7a entre financiamento e cons\u00f3rcio?",
    text: "No financiamento, o comprador recebe cr\u00e9dito ap\u00f3s aprova\u00e7\u00e3o e paga parcelas com juros e encargos. No cons\u00f3rcio, o comprador participa de um grupo e usa a carta ap\u00f3s contempla\u00e7\u00e3o por sorteio ou lance.",
  },
];

const faq = [
  {
    group: "Financiamento e Caixa",
    items: [
      [
        "A Orbix \u00e9 correspondente Caixa?",
        "A Orbix atua com opera\u00e7\u00e3o especializada em cr\u00e9dito imobili\u00e1rio Caixa, atendimento consultivo e acompanhamento de esteira. A aprova\u00e7\u00e3o final do cr\u00e9dito \u00e9 sempre feita pela institui\u00e7\u00e3o financeira.",
      ],
      [
        "A Orbix aprova cr\u00e9dito?",
        "N\u00e3o. A aprova\u00e7\u00e3o \u00e9 oficial da institui\u00e7\u00e3o financeira. A Orbix organiza a jornada, orienta documentos e acompanha as etapas para dar mais clareza ao processo.",
      ],
      [
        "O simulador garante taxa ou aprova\u00e7\u00e3o?",
        "N\u00e3o. Ele apresenta uma estimativa inicial. Taxa, prazo, valor aprovado e condi\u00e7\u00f5es dependem da an\u00e1lise oficial.",
      ],
      [
        "A Orbix atende Minha Casa Minha Vida?",
        "Sim. Ajudamos na leitura de renda, enquadramento, possibilidade de subs\u00eddio, documenta\u00e7\u00e3o e pr\u00f3ximos passos.",
      ],
      [
        "A Orbix atende SBPE Caixa?",
        "Sim. O SBPE exige leitura cuidadosa de renda, entrada, prazo, valor do im\u00f3vel e documenta\u00e7\u00e3o.",
      ],
    ],
  },
  {
    group: "Renda, FGTS e documenta\u00e7\u00e3o",
    items: [
      [
        "Quanto preciso ter de renda para financiar um im\u00f3vel?",
        "Depende do valor do im\u00f3vel, entrada, prazo, taxa, idade, perfil de cr\u00e9dito e comprometimento de renda. A simula\u00e7\u00e3o personalizada \u00e9 o melhor come\u00e7o.",
      ],
      [
        "Aut\u00f4nomo consegue financiar im\u00f3vel?",
        "Pode conseguir. A renda pode ser analisada por declara\u00e7\u00e3o de Imposto de Renda, extratos, movimenta\u00e7\u00e3o banc\u00e1ria e outros comprovantes aceitos na an\u00e1lise.",
      ],
      [
        "MEI ou empres\u00e1rio pode comprovar renda?",
        "Pode. Normalmente a documenta\u00e7\u00e3o envolve Imposto de Renda, pr\u00f3-labore, extratos, faturamento, contrato social ou documentos equivalentes.",
      ],
      [
        "Posso usar FGTS no financiamento?",
        "Em muitos casos sim, desde que comprador, im\u00f3vel e opera\u00e7\u00e3o atendam \u00e0s regras vigentes. A an\u00e1lise precisa ser feita caso a caso.",
      ],
      [
        "Quais documentos costumam ser analisados?",
        "Documentos pessoais, comprovantes de renda, estado civil, documenta\u00e7\u00e3o do im\u00f3vel e informa\u00e7\u00f5es exigidas pela institui\u00e7\u00e3o financeira.",
      ],
    ],
  },
  {
    group: "ITBI, cart\u00f3rio e p\u00f3s-aprova\u00e7\u00e3o",
    items: [
      [
        "O que acontece depois que o financiamento \u00e9 aprovado?",
        "Depois da aprova\u00e7\u00e3o, normalmente v\u00eam emiss\u00e3o de contrato, assinaturas, pagamento de ITBI, registro em cart\u00f3rio e libera\u00e7\u00e3o conforme regras da opera\u00e7\u00e3o.",
      ],
      [
        "A Orbix ajuda com ITBI e registro em cart\u00f3rio?",
        "A Orbix orienta a organiza\u00e7\u00e3o documental e acompanha a esteira para que comprador e parceiros tenham clareza sobre pend\u00eancias, prazos e pr\u00f3ximas etapas.",
      ],
      [
        "O que \u00e9 despachante imobili\u00e1rio?",
        "Na pr\u00e1tica, \u00e9 o apoio operacional para documentos, protocolos, certid\u00f5es, ITBI, cart\u00f3rio e acompanhamento de etapas burocr\u00e1ticas da compra do im\u00f3vel.",
      ],
    ],
  },
  {
    group: "Cons\u00f3rcio imobili\u00e1rio",
    items: [
      [
        "Cons\u00f3rcio imobili\u00e1rio tem juros?",
        "N\u00e3o h\u00e1 juros de financiamento, mas existem taxa de administra\u00e7\u00e3o, fundo comum, fundo de reserva quando previsto e demais custos do grupo.",
      ],
      [
        "Como funciona o lance no cons\u00f3rcio?",
        "O lance \u00e9 uma oferta para tentar antecipar a contempla\u00e7\u00e3o. A estrat\u00e9gia depende do grupo, saldo, regras de assembleia e objetivo de compra.",
      ],
      [
        "Posso usar FGTS para lance no cons\u00f3rcio imobili\u00e1rio?",
        "Pode ser poss\u00edvel em situa\u00e7\u00f5es que atendam \u00e0s regras vigentes. \u00c9 preciso analisar titularidade, im\u00f3vel, finalidade, carta e regulamento do grupo.",
      ],
      [
        "A Orbix acompanha p\u00f3s-lance?",
        "Sim. Ajudamos a organizar documenta\u00e7\u00e3o, uso da carta de cr\u00e9dito e pr\u00f3ximos passos at\u00e9 a compra do im\u00f3vel.",
      ],
    ],
  },
  {
    group: "Acompanhamento",
    items: [
      [
        "Clientes conseguem acompanhar o processo?",
        "Sim. A proposta do app \u00e9 dar visibilidade \u00e0 esteira, documentos, pend\u00eancias e evolu\u00e7\u00e3o do processo.",
      ],
      [
        "A Orbix atende comprador final?",
        "Sim. A Orbix atende compradores, investidores, imobili\u00e1rias, construtoras e parceiros.",
      ],
      [
        "A Orbix atende em n\u00edvel nacional?",
        "Sim. A atua\u00e7\u00e3o \u00e9 nacional, com matriz em Ribeir\u00e3o Preto/SP e filial em S\u00e3o Paulo/SP.",
      ],
    ],
  },
];

const sources = [
  ["Cr\u00e9dito Imobili\u00e1rio CAIXA", "https://www.caixa.gov.br/voce/habitacao/paginas/default.aspx"],
  [
    "Minha Casa Minha Vida - Habita\u00e7\u00e3o Urbana CAIXA",
    "https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/urbana/paginas/default.aspx",
  ],
  [
    "Perguntas Frequentes Habita\u00e7\u00e3o CAIXA",
    "https://www.caixa.gov.br/voce/habitacao/perguntas-frequentes-novos-financiamentos",
  ],
  ["FGTS CAIXA", "https://www.caixa.gov.br/beneficios-trabalhador/fgts/Paginas/default.aspx"],
];

function BlogPage() {
  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="max-w-3xl">
          <div className="eyebrow">FAQ/Blog Orbix</div>
          <h1 className="mt-3 text-3xl sm:text-5xl">
            Cr\u00e9dito imobili\u00e1rio, Caixa, FGTS, cons\u00f3rcio e cart\u00f3rio.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-steel sm:text-lg">
            Guias pr\u00e1ticos para quem quer comprar um im\u00f3vel financiado, entender a renda
            necess\u00e1ria, usar FGTS, comparar cons\u00f3rcio e organizar ITBI, registro e documentos.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
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

        <section className="mt-14 rounded-[1.5rem] border border-border bg-white/75 p-5 shadow-quiet sm:p-7">
          <div className="max-w-3xl">
            <div className="eyebrow">D\u00favidas pesquisadas no Google</div>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Respostas diretas para quem est\u00e1 planejando comprar im\u00f3vel.
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

        <section className="mt-14 rounded-[1.5rem] bg-navy p-5 text-white shadow-premium sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-gold">FAQ Orbix</div>
              <h2 className="mt-2 font-display text-2xl">Perguntas frequentes</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Respostas objetivas sobre financiamento, correspondente Caixa, FGTS, ITBI,
              cart\u00f3rio, cons\u00f3rcio e assessoria em cr\u00e9dito imobili\u00e1rio.
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

        <section className="mt-12">
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
