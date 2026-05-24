import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, FileCheck2, Home, Landmark, Scale } from "lucide-react";
import { OrbixNav } from "@/components/orbix-nav";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog Orbix | Crédito imobiliário, Caixa e Minha Casa Minha Vida" },
      {
        name: "description",
        content:
          "Guias práticos sobre financiamento imobiliário, Minha Casa Minha Vida, SBPE, consórcio e esteira de crédito.",
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
      "Renda, tipo de imóvel, documentação e localização impactam enquadramento, taxas e condições.",
    points: [
      "A CAIXA informa que o programa considera renda familiar, localização do imóvel e regras oficiais.",
      "O programa urbano atende famílias com renda mensal bruta de até R$ 13 mil, conforme canais oficiais.",
      "A análise final depende da instituição financeira e da documentação do comprador e do imóvel.",
    ],
  },
  {
    icon: <Landmark />,
    title: "SBPE Caixa: quando a operação precisa de mais estratégia",
    summary:
      "Para imóveis e perfis fora do MCMV, a simulação precisa olhar renda, prazo, entrada e risco documental.",
    points: [
      "A simulação é ponto de partida, não aprovação.",
      "Documentos incompletos travam a jornada e geram retrabalho para comprador, parceiro e imobiliária.",
      "A Orbix ajuda a transformar interesse em uma rota operacional clara.",
    ],
  },
  {
    icon: <FileCheck2 />,
    title: "Esteira de crédito: por que financiamento travado quase sempre é falta de processo",
    summary: "Sem esteira, o financiamento vira conversa solta, arquivo perdido e retorno manual.",
    points: [
      "Pré-análise evita que o cliente avance sem uma rota clara.",
      "Conferência documental reduz pendências recorrentes.",
      "Acompanhamento melhora previsibilidade para clientes, parceiros e gestores.",
    ],
  },
  {
    icon: <Scale />,
    title: "Consórcio imobiliário: compra planejada e estratégia de lance",
    summary:
      "Pode ser alternativa para quem aceita prazo e quer comprar sem juros tradicionais de financiamento.",
    points: [
      "A contemplação pode ocorrer por sorteio ou lance, conforme regras do grupo.",
      "Taxa de administração e custos do grupo precisam entrar na conta.",
      "Depois do lance, documentação e uso da carta de crédito exigem acompanhamento.",
    ],
  },
];

const faq = [
  [
    "A Orbix substitui a análise da Caixa?",
    "Não. A Orbix organiza a jornada; a aprovação é oficial.",
  ],
  [
    "O simulador garante taxa ou aprovação?",
    "Não. Ele mostra estimativa inicial para orientar a conversa.",
  ],
  ["A Orbix atende MCMV?", "Sim, com leitura de renda, enquadramento e documentação."],
  [
    "A Orbix atende SBPE?",
    "Sim, especialmente quando a operação exige mais organização e previsibilidade.",
  ],
  [
    "Consórcio tem juros?",
    "Não há juros de financiamento, mas há taxa de administração e custos do grupo.",
  ],
  [
    "Clientes e parceiros podem acompanhar processos?",
    "Sim. A proposta do app é dar visibilidade à esteira e pendências.",
  ],
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
          <div className="eyebrow">Blog Orbix</div>
          <h1 className="mt-3 text-4xl sm:text-6xl">
            Conteúdo para decidir melhor e vender com mais previsibilidade.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Guias práticos para compradores, investidores, imobiliárias, construtoras e parceiros.
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
          <h2 className="font-display text-3xl">FAQ completo</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {faq.map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
              >
                <h3 className="font-display text-xl">{question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/68">{answer}</p>
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
    </main>
  );
}
