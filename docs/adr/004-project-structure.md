# ADR 004 — Estrutura do Projeto

**Status:** Aceito  
**Data:** 2026-06-27  
**Decisores:** Chris (Proprietário), Claude (Arquiteto)

---

## Estrutura de Pastas

```
nexus-site/
├── public/                      # Arquivos estáticos (favicon, logo, fotos)
│   ├── favicon.svg
│   └── images/
│       └── team/                # Fotos da equipe editorial
├── src/
│   ├── main.jsx                 # Entry point
│   ├── App.jsx                  # Router principal
│   ├── styles/
│   │   ├── tokens.css           # Design tokens (ÚNICA fonte de verdade visual)
│   │   └── global.css           # Reset + utilities globais
│   ├── components/
│   │   ├── layout/              # Componentes de layout (header, footer)
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   └── ui/                  # Componentes UI reutilizáveis (átomos)
│   │       ├── Button.jsx
│   │       ├── Button.module.css
│   │       ├── SectionTitle.jsx
│   │       ├── SectionTitle.module.css
│   │       ├── Avatar.jsx
│   │       └── Avatar.module.css
│   ├── sections/                # Seções da página (moléculas/organismos)
│   │   ├── Hero/
│   │   ├── Sobre/
│   │   ├── Servicos/
│   │   ├── Equipe/
│   │   ├── ComoPublicar/
│   │   ├── Depoimentos/
│   │   └── CTAFinal/
│   ├── pages/                   # Páginas (composição de seções)
│   │   ├── Home.jsx
│   │   ├── LivrosPublicados.jsx (fase 2)
│   │   ├── Revista.jsx          (fase 2)
│   │   ├── Sobre.jsx            (fase 2)
│   │   └── Publicar.jsx         (fase 2)
│   └── data/                    # Dados estáticos (conteúdo editável)
│       ├── team.js              # Equipe editorial
│       ├── testimonials.js      # Depoimentos
│       └── books.js             # Livros publicados (fase 2)
├── docs/
│   └── adr/                     # Architecture Decision Records
├── .gitignore
├── index.html                   # HTML root (Vite entry)
├── package.json
├── vite.config.js
└── netlify.toml
```

## Regras de Contribuição para Agentes

### Hierarquia de componentes (Atomic Design adaptado)

1. **tokens.css** — valores primitivos (cores, tamanhos). NUNCA usar valores hardcoded nos componentes.
2. **global.css** — reset, body, utilitários (`.container`, `.sr-only`)
3. **ui/** — átomos: `Button`, `Avatar`, `SectionTitle`. Sem estado interno complexo.
4. **layout/** — `Header`, `Footer`. Usados em todas as páginas.
5. **sections/** — organismos: Hero, Sobre, etc. Compostos de ui/ + HTML semântico.
6. **pages/** — composição de sections/ + layout/.
7. **data/** — conteúdo separado da UI. Para atualizar texto, editar apenas data/*.js.

### Convenções

- Arquivos de componente: `PascalCase.jsx`
- CSS Modules: `PascalCase.module.css`
- Dados: `camelCase.js`
- IDs de âncora: `kebab-case` (para navegação interna: `#como-publicar`)

### Para adicionar nova seção

1. Criar pasta `src/sections/NomeDaSecao/`
2. Criar `NomeDaSecao.jsx` + `NomeDaSecao.module.css`
3. Importar em `src/pages/Home.jsx`
4. Atualizar CHANGELOG no PROJECT_Nexus_Harness.md

### Para adicionar nova página

1. Criar `src/pages/NomePagina.jsx`
2. Adicionar rota em `src/App.jsx`
3. Adicionar link no `Header.jsx`
4. Criar ADR se mudar arquitetura significativamente
