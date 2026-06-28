# CLAUDE.md — Nexus Científico Site

Site institucional da Editora Nexus Científico. React 18 + Vite 6 SPA, zero dependências de UI externas, sistema de design próprio via CSS Custom Properties + CSS Modules.

## Fluxo de trabalho — dia a dia

### Branches

| Branch | Para quê | O que o CI faz |
|--------|----------|----------------|
| `develop` | Trabalho em andamento (Christine) | Só valida o build |
| `main` | Código em produção | Valida build + faz deploy |

### Regra de ouro

**Nunca trabalhe direto no `main`.** Sempre evolua o projeto no `develop`.

```
develop → (Claude Code valida) → merge para main → deploy automático
```

### Passo a passo para a Christine

1. Certifique-se de estar no branch `develop`:
   ```bash
   git checkout develop
   ```
2. Faça as alterações com o Claude Code normalmente
3. Quando estiver satisfeita, peça ao Claude Code para publicar:
   > "publica no site" ou "faz o deploy"

   O Claude Code vai: rodar build local → merge para main → deploy dispara automaticamente

### O que acontece se o build quebrar

- O site antigo **continua no ar** — nada é tirado do ar
- GitHub envia e-mail de falha com link para os logs
- O erro fica isolado no `develop` — o `main` não é afetado
- Corrija com o Claude Code e repita o passo 3

## Comandos essenciais

```bash
npm run dev       # dev server: http://localhost:5173
npm run build     # produção → dist/ (rode antes de publicar para checar erros)
npm run lint      # ESLint no src/
```

## Arquitetura

**Hierarquia de composição (unidirecional — nunca inverter):**

```
tokens.css → global.css → ui/ (átomos) → layout/ → sections/ (organismos) → pages/
```

**Regra de ouro:** nunca usar valores fixos de cor, espaçamento ou fonte dentro de componentes — sempre via tokens de `src/styles/tokens.css`.

```
src/
├── components/
│   ├── layout/     # Header.jsx, Footer.jsx
│   └── ui/         # Button.jsx, SectionTitle.jsx
├── data/           # team.js, testimonials.js (arrays de objetos estáticos)
├── pages/          # Home, LivrosPublicados, Revista, Sobre, Publicar
├── sections/       # ComoPublicar/, CTAFinal/, Depoimentos/, Equipe/, Hero/, Servicos/
└── styles/
    ├── tokens.css  # fonte única da verdade para design tokens
    └── global.css  # reset + .container + utilitários
```

**Roteamento:** `src/App.jsx` — React Router v6. Fallback `*` → `/`.

**SPA routing em produção:** `public/_redirects` (`/* /index.html 200`) cobre o Cloudflare Pages.

## Como adicionar conteúdo

### Nova seção na Home

```
src/sections/NomeDaSecao/
├── NomeDaSecao.jsx
└── NomeDaSecao.module.css
```

Importar e inserir em `src/pages/Home.jsx`.

### Nova página

1. Criar `src/pages/NomePagina.jsx`
2. Adicionar rota em `src/App.jsx`
3. Linkar no `Header.jsx` (nav) e `Footer.jsx` (se necessário)

### Novo membro da equipe

Editar `src/data/team.js`. Foto vai em `public/images/equipe/nome.jpeg`.

### Novo depoimento

Editar `src/data/testimonials.js`.

## Design tokens

Arquivo: `src/styles/tokens.css`

| Grupo | Prefixo | Exemplo |
|-------|---------|---------|
| Cores primárias | `--color-primary-*` | `--color-primary-base: #1A2F6E` |
| Cores secundárias | `--color-secondary-*` | `--color-secondary-base: #0D5C63` |
| Cores terciárias (gold) | `--color-tertiary-*` | `--color-tertiary-base: #B8860B` |
| Tipografia heading | `--font-heading` | Merriweather serif |
| Tipografia body | `--font-body` | Source Sans 3 sans-serif |
| Espaçamento | `--space-*` | `--space-4: 16px` |
| Radius | `--radius-*` | `--radius-lg: 16px` |
| Sombra | `--shadow-*` | `--shadow-2` |
| Transição | `--transition-*` | `--transition-base: 250ms` |

## CI/CD — Cloudflare Pages

O pipeline tem dois jobs separados:

| Job | Roda em | Condição |
|-----|---------|----------|
| `Build` | `main`, `develop`, PRs | Sempre |
| `Deploy` | `main` apenas | Só se `Build` passou |

**Versões fixadas:** Node 22, wrangler 4 — não atualizam sozinhas e não quebram por surpresa.

**Secrets no repositório GitHub** (já configurados):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Imagens da equipe

Armazenadas em `public/images/equipe/`. Referenciadas em `src/data/team.js` como `/images/equipe/nome.jpeg`. O componente `Equipe.jsx` renderiza fallback com iniciais quando a foto não existe.

## ADRs

Decisões de arquitetura documentadas em `docs/adr/`:

- `001-tech-stack.md` — React 18 + Vite
- `002-design-system.md` — CSS Custom Properties + CSS Modules (vs Tailwind/MUI)
- `003-hosting-strategy.md` — histórico Netlify (supersedido por ADR-005)
- `004-project-structure.md` — atomic design adaptado
- `005-cloudflare-pages.md` — migração para Cloudflare Pages + domínio nexuscientifico.com.br
