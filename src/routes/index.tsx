import { createFileRoute } from "@tanstack/react-router";
import { ScrollFrameHero } from "@/components/ScrollFrameHero";
import logoAsset from "@/assets/aka-logo.png.asset.json";

const WHATSAPP_URL =
  "https://wa.me/5544999742968?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20com%20a%20AKA%20Tech";
const EMAIL = "Kayquevinibeiro1298@gmail.com";

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
    text: "Plataformas de gestão modeladas a partir do processo que a sua operação já usa — não o processo que um software de prateleira impõe.",
    items: [
      "ERPs e painéis administrativos internos",
      "Estoque, vendas, ordens de serviço e financeiro",
      "Multiusuário com níveis de permissão e trilha de auditoria",
      "Integração com sistemas legados, ERPs e planilhas em uso",
      "Relatórios e indicadores atualizados em tempo real",
    ],
  },
  {
    tag: "02",
    title: "Softwares e APIs",
    text: "Engenharia de ponta a ponta: arquitetura, modelagem de dados, back-end e manutenção evolutiva com responsabilidade técnica definida.",
    items: [
      "Aplicações web e desktop",
      "APIs REST documentadas para integração com parceiros",
      "Modelagem de banco de dados e otimização de consultas",
      "Testes automatizados, versionamento e deploy contínuo",
      "Monitoramento, correções e evolução pós-entrega",
    ],
  },
  {
    tag: "03",
    title: "Automações e IA",
    text: "Rotina repetitiva é custo fixo disfarçado. Mapeamos o fluxo, automatizamos o que se paga e devolvemos as horas para a operação.",
    items: [
      "Robôs de processo (RPA) e rotinas agendadas",
      "Integração entre sistemas que não conversam entre si",
      "Notificações automáticas por WhatsApp e e-mail",
      "Extração de dados, relatórios e conciliações",
      "Agentes de IA para triagem e atendimento interno",
    ],
  },
  {
    tag: "04",
    title: "Sites e landing pages",
    text: "Presença digital rápida, acessível e medida por conversão — não por prêmio de design.",
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
  ["Diagnóstico", "Mapeamos a operação, os gargalos e o custo real do problema antes de propor qualquer sistema."],
  ["Escopo e proposta", "Entregáveis, prazos, premissas e investimento documentados por escrito. Sem escopo aberto."],
  ["Protótipo", "Interface e fluxo validados com o seu time antes de escrever a versão final do código."],
  ["Desenvolvimento", "Ciclos curtos com entregas parciais em ambiente de homologação e revisão a cada etapa."],
  ["Testes e validação", "Testes funcionais, de carga e homologação assistida com os usuários que vão operar."],
  ["Entrega e suporte", "Código-fonte, documentação, treinamento e um canal direto para evolução contínua."],
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
  ["Propriedade do código", "Código-fonte e documentação entregues ao cliente. Nenhuma dependência de fornecedor."],
  ["Arquitetura para escala", "Decisões técnicas tomadas para o volume de dois anos à frente, não só para o go-live."],
  ["Prazo com método", "Entregas parciais verificáveis: o progresso é medido em software funcionando."],
  ["Suporte com engenheiro", "Atendimento com quem desenvolveu o sistema, sem camada de intermediação."],
];

const FAQ = [
  [
    "Quanto tempo leva um projeto?",
    "Um site institucional costuma levar de 2 a 4 semanas. Sistemas e automações variam de 4 a 16 semanas conforme o escopo, sempre com entregas parciais em homologação ao longo do caminho.",
  ],
  [
    "Como funciona o investimento?",
    "Orçamento fechado por escopo, dividido em etapas com marcos de pagamento. Manutenção e evolução podem ser contratadas em regime mensal.",
  ],
  [
    "Vocês dão manutenção depois da entrega?",
    "Sim. Todo projeto inclui período de garantia e opção de contrato de suporte com melhorias contínuas e SLA acordado.",
  ],
  [
    "O sistema integra com o que já uso hoje?",
    "Na maioria dos casos, sim. Integramos via API, acesso direto ao banco ou automação de interface quando não existe API disponível.",
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
    <section id={id} className="border-t border-border px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[10rem_1fr]">
        <p className="pt-2 font-mono text-[11px] tracking-[0.2em] text-brand uppercase">{eyebrow}</p>
        <div>
          <h2 className="max-w-3xl font-display text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main className="bg-background text-foreground">
      <div className="hero-scope">
        <ScrollFrameHero />
      </div>

      <div className="relative">
        <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
            <a href="#empresa" className="inline-flex items-center rounded-lg bg-[#07070b] px-2.5 py-1.5">
              <img
                src={logoAsset.url}
                alt="AKA Tech"
                className="h-8 w-auto sm:h-10"
                width={900}
                height={708}
              />
            </a>
            <nav className="hidden gap-6 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase md:flex">
              <a href="#servicos" className="hover:text-brand">Serviços</a>
              <a href="#processo" className="hover:text-brand">Processo</a>
              <a href="#tecnologias" className="hover:text-brand">Stack</a>
              <a href="#faq" className="hover:text-brand">FAQ</a>
            </nav>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand px-4 py-2 text-xs font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Orçamento
            </a>
          </div>
        </header>

        <Section
          id="empresa"
          eyebrow="Quem somos"
          title="Engenharia de software aplicada à operação que sustenta o seu negócio."
        >
          <div className="grid gap-8 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              A AKA System é uma casa de desenvolvimento de software. Não revendemos licença nem
              adaptamos produto pronto: estudamos como a sua empresa opera de fato e construímos a
              ferramenta que falta — um sistema de gestão, uma automação que elimina horas de
              trabalho manual ou uma presença digital que sustenta a marca.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Trabalhamos em times pequenos e com comunicação direta: quem discute o problema é
              quem escreve o código. Cada projeto começa por um diagnóstico honesto — inclusive
              sobre o que não vale a pena construir — e termina com documentação, treinamento e
              suporte. Tecnologia se justifica quando reduz custo, aumenta receita ou devolve
              tempo; é por esse critério que medimos o nosso trabalho.
            </p>
          </div>
          <dl className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              ["Sob medida", "Nenhum template forçado sobre a sua operação"],
              ["Entrega em ciclos", "Software funcionando a cada etapa, não slides"],
              ["Suporte contínuo", "Evolução planejada depois do go-live"],
            ].map(([t, s]) => (
              <div key={t} className="bg-surface p-6">
                <dt className="font-display text-base font-semibold text-foreground">{t}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section
          id="servicos"
          eyebrow="O que fazemos"
          title="Sistemas, softwares, automações e sites."
        >
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {SERVICES.map((s) => (
              <article key={s.tag} className="bg-surface p-8">
                <span className="font-mono text-xs tracking-[0.2em] text-brand">{s.tag}</span>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-brand" />
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
          title="Um método verificável, do primeiro contato ao suporte."
        >
          <ol className="grid gap-px border border-border bg-border md:grid-cols-3">
            {PROCESS.map(([t, d], i) => (
              <li key={t} className="bg-surface p-7">
                <span className="font-mono text-xs text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="tecnologias"
          eyebrow="Tecnologias"
          title="Ferramentas escolhidas pelo problema, não pela tendência."
        >
          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-y border-border py-6">
            {STACK.map((t) => (
              <li key={t} className="font-mono text-xs tracking-wide text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
        </Section>

        <Section
          id="diferenciais"
          eyebrow="Por que a AKA"
          title="O que muda ao contratar um time de engenharia."
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFERENTIALS.map(([t, d]) => (
              <div key={t} className="border-t border-brand pt-4">
                <h3 className="font-display text-base font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="Dúvidas frequentes"
          title="Perguntas que sempre chegam antes do contrato."
        >
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map(([q, a]) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none font-display text-base font-medium text-foreground marker:hidden">
                  <span className="mr-3 font-mono text-brand">+</span>
                  {q}
                </summary>
                <p className="mt-3 max-w-3xl pl-6 text-sm leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <section id="contato" className="border-t border-border px-6 py-20 sm:px-10 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[10rem_1fr]">
            <p className="pt-2 font-mono text-[11px] tracking-[0.2em] text-brand uppercase">
              Contato
            </p>
            <div>
              <h2 className="max-w-3xl font-display text-2xl leading-snug font-semibold tracking-tight text-foreground sm:text-4xl">
                Descreva o problema. Devolvemos um diagnóstico técnico e um escopo.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                A conversa inicial é sem compromisso: entendemos a operação e dizemos com clareza o
                que dá para automatizar, o que precisa virar sistema e o que ainda não se paga.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
                >
                  Falar no WhatsApp (44) 99974-2968
                </a>
                <a
                  href={`mailto:${EMAIL}?subject=Or%C3%A7amento%20AKA%20Tech`}
                  className="border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-brand"
                >
                  Enviar e-mail
                </a>
              </div>
              <dl className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.2em] text-brand uppercase">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 text-sm text-foreground">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      (44) 99974-2968
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] tracking-[0.2em] text-brand uppercase">
                    E-mail
                  </dt>
                  <dd className="mt-1 break-all text-sm text-foreground">
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <footer className="border-t border-border px-6 py-10 sm:px-10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
            <span className="inline-flex items-center rounded-lg bg-[#07070b] px-3 py-2">
              <img src={logoAsset.url} alt="AKA Tech" className="h-9 w-auto" />
            </span>
            <div className="font-mono text-xs leading-relaxed text-muted-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp (44) 99974-2968
              </a>
              <br />
              <a href={`mailto:${EMAIL}`} className="break-all">
                {EMAIL}
              </a>
            </div>
            <span className="font-mono text-xs text-muted-foreground">
              © {new Date().getFullYear()} AKA Tech · Sistemas · Softwares · Automações · Sites
            </span>
          </div>
        </footer>

      </div>
    </main>
  );
}

