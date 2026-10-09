# Plano — Facada Live e Conteúdo

## Escopo
Página inicial responsiva em português brasileiro, recriada a partir da referência Facada com hero, player de live, CTA de voz, galerias de conteúdo, parceiro Betano, modal de Setup, menu mobile, modais de mídia e footer.

## Direção visual aprovada
- **Movimento:** brutalismo digital / editorial esportivo, com acabamento de dossiê e fita de transmissão.
- **Princípios:** contraste máximo, tipografia display agressiva, informação modular, microinterações rápidas.
- **Cores:** fundo quase preto azulado para sensação de palco; amarelo ácido como cor proprietária de ação e energia; branco e cinzas frios para hierarquia.
- **Layout:** hero assimétrico em duas colunas, seções editoriais com cabeçalhos de dossiê e galerias inclinadas, evitando uma composição centralizada genérica.
- **Assinaturas:** fita marquee listrada, cantos técnicos amarelos e textura granulada sutil.
- **Interação:** links externos claros, cards clicáveis com modal, menu mobile fullscreen e Setup em diálogo nativo.
- **Animação:** reveal vertical discreto, marquee contínuo, hover de elevação/brilho e contador de banca; respeito a prefers-reduced-motion.
- **Tipografia:** Clash Display para títulos e wordmark, Satoshi para corpo, JetBrains Mono para labels e metadados.
- **Essência:** hub afiado para comunidade gamer e audiência de live; energético, direto, irreverente.
- **Voz:** CTAs em imperativo curto e microcopy de comunidade. Exemplos: “ASSISTIR NA TWITCH” e “Envie sua mensagem de voz na live”.
- **Wordmark:** FACADA em caixa alta com ponto amarelo, tratamento compacto de canal.
- **Cor proprietária:** #feea00.

## Implementação
- HTML/CSS/JS vanilla com servidor Node mínimo, sem dependências externas.
- Assets locais em `assets/`, servidos em `/assets/`.
- `public/manus-routes.json` declara a rota `/`.
- Interações: menu mobile, modal Setup, modal de mídia, contador, marquee e ocultação do header ao rolar.
- Preview no runtime 3000 em `0.0.0.0`.
