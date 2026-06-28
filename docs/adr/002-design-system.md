# ADR 002 — Design System

**Status:** Aceito  
**Data:** 2026-06-27  
**Decisores:** Chris (Proprietário), Claude (Designer/Arquiteto)

---

## Contexto

O site precisa de identidade visual consistente, escalável e fácil de manter. Qualquer agente ou desenvolvedor precisa conseguir criar novos componentes sem quebrar o visual.

## Decisão

Design System baseado em **CSS Custom Properties (tokens)** + **CSS Modules**, seguindo os princípios do **Google Material Design 3**.

## Princípios Adotados

### 1. Design Tokens (src/styles/tokens.css)
Todas as decisões de design são variáveis CSS:
- Cores (`--color-primary`, `--color-secondary`, etc.)
- Tipografia (`--font-heading`, `--text-headline-lg`, etc.)
- Espaçamentos (`--space-4`, `--space-8`, etc.)
- Raios de borda (`--radius-md`, `--radius-lg`)
- Sombras (`--shadow-1` a `--shadow-4`)

**Regra:** Nenhum componente deve usar valores hardcoded — sempre via token.

### 2. CSS Modules (ComponentName.module.css)
Cada componente tem seu próprio arquivo CSS com escopo automático. Evita colisões de classes.

### 3. Sem biblioteca UI externa
Não usamos Tailwind, Material UI, Chakra, etc. O design system é próprio, baseado no MIV da Nexus Científico. Isso garante identidade única e controle total.

## Paleta de Cores

```
Primary (Navy Blue):     #1A2F6E → confiança, conhecimento, autoridade
Secondary (Dark Teal):   #0D5C63 → ciência, profundidade
Tertiary (Amber Gold):   #B8860B → excelência, distinção
Surface:                 #F8F9FA → fundos de cards
Background:              #FFFFFF → fundo geral
Text:                    #1C1B1F → texto principal
Text Secondary:          #49454F → texto de apoio
```

## Tipografia

```
Headings: Merriweather (serif)  → autoridade acadêmica
Body:     Source Sans 3 (sans)  → legibilidade, modernidade
```

## Alternativas Rejeitadas

| Opção | Motivo da Rejeição |
|---|---|
| Tailwind CSS | Utilitários no HTML reduzem legibilidade; design genérico |
| Material UI (MUI) | Impõe opiniões visuais que conflitam com o MIV |
| Styled Components | Runtime CSS-in-JS desnecessário; CSS Modules suficiente |
| Bootstrap | Visual datado, não compatível com o posicionamento da Nexus |

## Consequências

- Qualquer agente pode atualizar toda a paleta editando `tokens.css`
- Componentes são independentes e reutilizáveis entre páginas
- Para dark mode futuro: adicionar `@media (prefers-color-scheme: dark)` em `tokens.css`

## Referência

- MIV completo: `../../../MIV_Nexus_Cientifico.md`
- Material Design 3: https://m3.material.io/
