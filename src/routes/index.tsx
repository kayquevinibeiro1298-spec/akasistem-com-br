import { createFileRoute } from "@tanstack/react-router";
import { ScrollFrameHero } from "@/components/ScrollFrameHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKA System | Sistemas, Softwares, Automações e Sites" },
      {
        name: "description",
        content:
          "A AKA System desenvolve sistemas sob medida, softwares, automações de processos e sites de alta performance para empresas que querem escalar.",
      },
      { property: "og:title", content: "AKA System | Software sob medida para sua empresa" },
      {
        property: "og:description",
        content:
          "Sistemas, softwares, automações e sites desenvolvidos sob medida pela AKA System.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    tag: "01",
    title: "Sistemas sob medida",
    text: "Plataformas de gestão feitas para o seu processo, não para o processo genérico de um software de prateleira.",
    items: [
      "ERPs e painéis administrativos internos",
      "Controle de estoque, vendas, ordens de serviço e financeiro",
      "Multiusuário com níveis de permissão e auditoria",
      "Integração com sistemas legados, ERPs e planilhas existentes",
      "Relatórios e dashboards em tempo real",
    ],
  },
  {
    tag: "02",
    title: "Softwares e APIs",
    text: "Engenharia de software do zero: arquitetura, banco de dados, back-end e manutenção evolutiva.",
    items: [
      "Aplicações web e desktop",
      "APIs REST documentadas para integrar parceiros",
      "Modelagem de banco de dados e otimização de consultas",
      "Testes, versionamento e deploy contínuo",
      "Manutenção, monitoramento e suporte evolutivo",
    ],
  },
  {
    tag: "03",
    title: "Automações e IA",
    text: "Tudo que é repetitivo pode ser automatizado. Sua equipe volta a cuidar do que dá lucro.",
    items: [
      "Robôs de processos (RPA) e rotinas agendadas",
      "Integração entre sistemas que não conversam entre si",
      "Disparos automáticos por WhatsApp e e-mail",
      "Extração de dados, emissão de relatórios e conciliações",
      "Agentes de IA para atendimento e triagem interna",
    ],
  },
  {
    tag: "04",
    title: "Sites e landing pages",
    text: "Presença digital rápida, responsiva e construída para converter visitante em cliente.",
    items: [
      "Sites institucionais e páginas de captação",
      "Lojas virtuais e catálogos com pagamento online",
      "Performance, Core Web Vitals e SEO técnico",
      "Painel para o cliente editar o próprio conteúdo",
      "Hospedagem, domínio e acompanhamento pós-entrega",
    ],
  },
];

const PROCESS = [
  ["Diagnóstico", "Entendemos a operação, os gargalos e o que realmente precisa existir."],
  ["Escopo e proposta", "Entregáveis, prazos e investimento definidos por escrito, sem surpresa."],
  ["Protótipo", "Você vê a interface e o fluxo antes de uma linha de código final."],
  ["Desenvolvimento", "Entregas em ciclos curtos, com acompanhamento e ajustes no caminho."],
  ["Testes e validação", "Testes funcionais, de carga e homologação junto ao seu time."],
  ["Entrega e suporte", "Treinamento, documentação e suporte contínuo com evolução do sistema."],
];

const STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Supabase",
  "Next / TanStack",
  "Docker",
  "n8n",
  "APIs REST",
  "WhatsApp API",
  "Cloud & CI/CD",
];

const DIFFERENTIALS = [
  ["Código é seu", "Você recebe o código-fonte e a documentação. Nada de refém de fornecedor."],
  ["Feito para escalar", "Arquitetura pensada para crescer junto com o volume da sua operação."],
  ["Prazo com método", "Ciclos curtos e entregas parciais: você acompanha o progresso real."],
  ["Suporte de verdade", "Canal direto com quem desenvolveu, não com um atendimento genérico."],
];

const FAQ = [
  [
    "Quanto tempo leva um projeto?",
    "Um site institucional costuma sair em 2 a 4 semanas. Sistemas e automações variam de 4 a 16 semanas conforme o escopo, sempre com entregas parciais no caminho.",
  ],
  [
    "Como funciona o investimento?",
    "Orçamento fechado por escopo, dividido em etapas. Manutenção e evolução podem ser contratadas por mensalidade.",
  ],
  [
    "Vocês dão manutenção depois da entrega?",
    "Sim. Todo projeto sai com período de garantia e opção de contrato de suporte com melhorias contínuas.",
  ],
  [
    "O sistema integra com o que já uso hoje?",
    "Na maioria dos casos sim. Integramos via API, banco de dados ou automação quando não existe API disponível.",
  ],
  [
    "De quem é a propriedade do software?",
    "Sua. A AKA System entrega o código-fonte e a documentação técnica ao final do projeto.",
  ],
];

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border px-6 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight font-semibold text-foreground sm:text-5xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <ScrollFrameHero />

      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-30" />
        <div className="relative">
          <Section
            id="empresa"
            eyebrow="Quem somos"
            title="A AKA System constrói a tecnologia que sua empresa usa todos os dias."
          >
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos uma empresa de desenvolvimento de software focada em resolver problemas
                reais de operação. Em vez de vender um produto pronto e torcer para que ele sirva,
                estudamos o funcionamento do seu negócio e construímos exatamente a ferramenta que
                falta — seja um sistema de gestão, uma automação que elimina horas de trabalho
                manual ou um site que finalmente representa a marca.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Trabalhamos com times pequenos e comunicação direta: você fala com quem programa.
                Cada projeto começa por um diagnóstico honesto, segue por entregas curtas e termina
                com documentação, treinamento e suporte. Tecnologia só vale a pena quando reduz
                custo, aumenta receita ou devolve tempo — e é assim que medimos o nosso trabalho.
              </p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {[
                ["Sob medida", "Nada de template forçado na sua operação"],
                ["Entrega em ciclos", "Você acompanha o sistema nascendo"],
                ["Suporte contínuo", "Evolução depois do go-live"],
              ].map(([t, s]) => (
                <div key={t} className="bg-surface p-6">
                  <p className="font-display text-lg font-semibold text-foreground">{t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="servicos"
            eyebrow="O que fazemos"
            title="Sistemas, softwares, automações e sites."
          >
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((s) => (
                <article
                  key={s.tag}
                  className="rounded-lg border border-border bg-surface/70 p-7 transition-colors hover:border-brand/50"
                >
                  <span className="font-mono text-xs tracking-[0.3em] text-brand">{s.tag}</span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <ul className="mt-5 space-y-2">
                    {s.items.map((i) => (
                      <li key={i} className="flex gap-3 text-sm text-foreground/80">
                        <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-brand" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Section>

          <Section
            id="processo"
            eyebrow="Como trabalhamos"
            title="Um método claro, do primeiro contato ao suporte."
          >
            <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
              {PROCESS.map(([t, d], i) => (
                <li key={t} className="bg-surface p-7">
                  <span className="font-mono text-xs text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </Section>

          <Section
            id="tecnologias"
            eyebrow="Tecnologias"
            title="Ferramentas escolhidas pelo problema, não pela moda."
          >
            <div className="flex flex-wrap gap-3">
              {STACK.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs tracking-wide text-foreground/85"
                >
                  {t}
                </span>
              ))}
            </div>
          </Section>

          <Section id="diferenciais" eyebrow="Por que a AKA" title="O que muda ao trabalhar com a gente.">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DIFFERENTIALS.map(([t, d]) => (
                <div key={t} className="border-l border-brand/50 pl-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="faq" eyebrow="Dúvidas frequentes" title="Perguntas que sempre chegam antes do projeto.">
            <div className="divide-y divide-border border-y border-border">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="cursor-pointer list-none font-display text-lg font-medium text-foreground marker:hidden">
                    <span className="mr-3 text-brand">+</span>
                    {q}
                  </summary>
                  <p className="mt-3 max-w-3xl pl-6 text-sm leading-relaxed text-muted-foreground">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </Section>

          <section id="contato" className="border-t border-border px-6 py-24 sm:px-10 sm:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-mono text-[11px] tracking-[0.3em] text-brand uppercase">Contato</p>
              <h2 className="mt-4 font-display text-3xl leading-tight font-semibold text-foreground text-glow sm:text-5xl">
                Conte o seu problema. A gente devolve a solução em software.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                Diagnóstico inicial sem compromisso: entendemos a sua operação e dizemos com
                honestidade o que dá para automatizar, o que precisa ser sistema e o que não vale
                a pena fazer agora.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:contato@akasystem.com.br?subject=Or%C3%A7amento%20AKA%20System"
                  className="rounded-md bg-brand px-6 py-3 font-medium text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Solicitar orçamento
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-brand/60"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </section>

          <footer className="border-t border-border px-6 py-10 sm:px-10">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
              <span className="font-display text-sm tracking-[0.35em] text-foreground/80 uppercase">
                AKA System
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                Sistemas · Softwares · Automações · Sites
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                © {new Date().getFullYear()} AKA System
              </span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
