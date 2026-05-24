import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FileCheck2, Home, Landmark, Scale } from "lucide-react";
import { OrbixFooter } from "@/components/orbix-footer";
import { OrbixNav } from "@/components/orbix-nav";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog/FAQ Orbix | Crédito imobiliário, Caixa e Minha Casa Minha Vida" },
      {
        name: "description",
        content:
          "Guias práticos e perguntas frequentes sobre financiamento imobiliário, Minha Casa Minha Vida, SBPE, consórcio e esteira de crédito.",
      },
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
];

const faq = [
  {
    group: "Financiamento",
    items: [
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
        "A Orbix atende SBPE?",
        "Sim. O SBPE exige leitura cuidadosa de renda, entrada, prazo, valor do imóvel e documentação.",
      ],
    ],
  },
  {
    group: "Renda e documentação",
    items: [
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
    group: "Consórcio",
    items: [
      [
        "Ter restrição impede comprar consórcio?",
        "Para entrar em um grupo, a restrição pode não ser o mesmo impeditivo de um financiamento. Porém, na contemplação e uso da carta, pode haver análise cadastral e documental.",
      ],
      [
        "Consórcio imobiliário tem juros?",
        "Não há juros de financiamento, mas existem taxa de administração, fundo comum, fundo de reserva quando previsto e demais custos do grupo.",
      ],
      [
        "Como funciona o lance no consórcio?",
        "O lance é uma oferta para tentar antecipar a contemplação. A estratégia depende do grupo, saldo, regras de assembleia e objetivo de compra.",
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
    "MCMV Classe Média - Ministério das Cidades",
    "https://www.gov.br/cidades/pt-br/acesso-a-informacao/acoes-e-programas/habitacao/programa-minha-casa-minha-vida/minha-casa-minha-vida-classe-media/minha-casa-minha-vida-classe-media-1",
  ],
  [
    "Perguntas Frequentes Habitação CAIXA",
    "https://www.caixa.gov.br/voce/habitacao/perguntas-frequentes-novos-financiamentos",
  ],
];

function BlogPage() {
  return (
    <main className="min-h-screen bg-ice text-ink">
      <OrbixNav />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="max-w-3xl">
          <div className="eyebrow">Blog/FAQ Orbix</div>
          <h1 className="mt-3 text-4xl sm:text-6xl">
            Conteúdo para decidir melhor e financiar com mais clareza.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Guias práticos e respostas objetivas para compradores, investidores, imobiliárias,
            construtoras e parceiros.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="interactive-card surface-card rounded-[1.5rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                <span className="[&>svg]:h-5 [&>svg]:w-5">{post.icon}</span>
              </div>
              <h2 className="mt-6 font-display text-2xl">{post.title}</h2>
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

        <section className="mt-16 rounded-[2rem] bg-navy p-6 text-white shadow-premium sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-[11px] font-bold uppercase text-gold">FAQ Orbix</div>
              <h2 className="mt-2 font-display text-3xl">Perguntas frequentes</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/60">
              Respostas diretas para as dúvidas que mais aparecem antes de simular, financiar ou
              planejar uma compra por consórcio.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {faq.map((section) => (
              <div
                key={section.group}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"
              >
                <h3 className="font-display text-2xl text-gold">{section.group}</h3>
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
