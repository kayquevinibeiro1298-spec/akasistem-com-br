# Site AKA System — hero com vídeo controlado pelo scroll

## Visão geral

Uma landing page única, escura e tecnológica (azul profundo + ciano, tipografia técnica),
seguindo a identidade do vídeo enviado. O topo é dominado pela animação de frames
controlada pelo scroll; a partir de certo ponto o site passa a ser só conteúdo.

## Hero com scroll-scrubbing (o pedido principal)

- O vídeo enviado (720x1280, 8s, 192 frames) é decomposto frame a frame em imagens.
- Para performance, usamos ~120 frames em JPEG otimizado (largura ~900px), hospedados
  como assets de CDN.
- Um `<canvas>` fixo na tela desenha o frame correspondente à posição do scroll:
  descer avança o vídeo, subir retrocede — sem reprodução automática.
- A seção do hero tem ~400vh de altura de rolagem: enquanto o usuário rola nela, só a
  animação avança. Ao chegar ao fim, o canvas sai e começa o conteúdo normal.
- Pré-carregamento das imagens com barra de progresso simples antes de liberar a cena,
  e fallback estático (primeiro frame) em conexões lentas ou telas pequenas.
- Sobre o canvas: logo AKA System e uma headline que troca em 2 ou 3 momentos da
  animação (ex.: "Sistemas", "Automações", "Sites").

## Conteúdo depois do hero

1. **Quem somos** — AKA System, empresa de tecnologia e programação sob medida.
2. **O que fazemos** — quatro blocos aprofundados:
   - Sistemas sob medida (ERPs, painéis internos, gestão, integrações, multiusuário)
   - Softwares (desktop/web, APIs, arquitetura, banco de dados, manutenção)
   - Automações (robôs de processos, integrações entre sistemas, WhatsApp/e-mail,
     relatórios automáticos, agentes de IA)
   - Sites e landing pages (institucional, e-commerce, performance, SEO)
3. **Como trabalhamos** — processo em etapas: diagnóstico, escopo, protótipo,
   desenvolvimento, testes, entrega e suporte contínuo.
4. **Tecnologias** — lista das stacks usadas.
5. **Por que a AKA** — diferenciais (código próprio, suporte, prazos, escalabilidade).
6. **FAQ** — dúvidas comuns sobre prazo, custo, manutenção e propriedade do código.
7. **Contato / CTA** — chamada para orçamento (formulário simples que abre e-mail ou
   WhatsApp; sem backend nesta etapa).
8. **Rodapé** com identidade da empresa.

## Detalhes técnicos

- Extração dos frames com ffmpeg a partir do arquivo enviado; upload dos JPEGs como
  assets de CDN (o vídeo original não fica no repositório).
- Componente `ScrollFrameHero` em React: `requestAnimationFrame` + listener de scroll,
  índice do frame calculado pelo progresso da seção, desenho em canvas com
  `object-fit: cover` manual.
- Design tokens (cores, gradientes, sombras) definidos em `src/styles.css`; nada de
  cor fixa nos componentes.
- Página construída em `src/routes/index.tsx` com head() próprio (título, descrição,
  og/twitter) para SEO.
- Textos em português; H1 único no hero.

## Fora do escopo desta etapa

Backend, envio real de formulário, área de login ou blog — dá para adicionar depois.
