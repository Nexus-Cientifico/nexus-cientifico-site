# ADR 001 — Tech Stack

**Status:** Aceito  
**Data:** 2026-06-27  
**Decisores:** Chris (Proprietário), Claude (Arquiteto)

---

## Contexto

O site da Editora Nexus Científico estava em um construtor visual (HostGator Website Builder) com limitações severas de design, SEO, automação e escalabilidade. A decisão foi reescrever do zero com tecnologias modernas.

## Decisão

**React 18 + Vite 5** como base do projeto.

## Alternativas Consideradas

| Opção | Prós | Contras | Decisão |
|---|---|---|---|
| HTML/CSS/JS puro | Zero dependências, simples | Muito verboso para escalar, sem componentes reutilizáveis | ❌ Rejeitado |
| React + Vite | Componentes, DX excelente, build ultra-rápido, ecossistema enorme | Requer Node.js para desenvolvimento | ✅ **Escolhido** |
| Next.js | SSR nativo, SEO automático | Complexidade excessiva para a fase atual | 🔄 Considerado para Fase 3 |
| Vue.js | Similar ao React | Ecossistema menor, menos agentes treinados | ❌ Rejeitado |

## Justificativa

1. **React** é o framework mais adotado no mercado — mais agentes de IA, mais documentação, mais componentes disponíveis
2. **Vite** tem o build mais rápido entre os bundlers modernos (HMR instantâneo)
3. **Componentes reutilizáveis** permitem crescer para novas páginas sem reescrever código
4. **Separação de concerns** (data/UI/routing) facilita manutenção por agentes

## Consequências

- Requer Node.js no ambiente de desenvolvimento (já presente)
- Build gera arquivos estáticos otimizados (ideal para Netlify)
- Para SEO avançado: migrar para Next.js na Fase 3 (ADR 005 futuro)

## Dependências

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.24.0",
  "@vitejs/plugin-react": "^4.3.1",
  "vite": "^5.3.1"
}
```
