# ADR-005 — Migração para Cloudflare Pages

**Data:** 2026-06-28  
**Status:** Aceito  
**Supersede:** ADR-003 (Estratégia de Hospedagem Netlify)

## Contexto

O projeto foi originalmente planejado para Netlify (ADR-003). Após avaliação, a decisão foi migrar para Cloudflare Pages para:

- Integrar com o domínio `nexuscientifico.com.br` que já possui registros DNS no Cloudflare
- Eliminar um provedor externo (Netlify + Cloudflare DNS → só Cloudflare)
- Aproveitar a CDN global da Cloudflare sem configuração adicional
- Manter CI/CD via GitHub Actions com workflow explícito (`.github/workflows/deploy.yml`)

## Decisão

Cloudflare Pages como plataforma de hospedagem estática, com deploy automatizado via GitHub Actions usando a action oficial `cloudflare/pages-action`.

## Consequências

**Positivas:**
- Zero Cold Start — Cloudflare Pages serve arquivos estáticos puro
- CDN global automática com +300 pontos de presença
- Preview URLs automáticas para Pull Requests
- Domínio customizado com SSL gerenciado pelo Cloudflare
- Sem limite de banda no free tier para projetos open source/institucionais

**Trade-offs:**
- `netlify.toml` permanece no repositório para referência histórica mas não é usado
- Redirects de SPA via `public/_redirects` (mesmo formato do Netlify — compatível)
- Headers de segurança precisam ser configurados via `public/_headers` se necessário no futuro

## Implementação

1. **`public/_redirects`** — SPA routing: `/* /index.html 200`
2. **`.github/workflows/deploy.yml`** — pipeline de build + deploy
3. **Secrets no GitHub:** `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID`
4. **Domínio:** `nexuscientifico.com.br` configurado via painel Cloudflare Pages → Custom Domains

## Migração DNS

Após o primeiro deploy bem-sucedido:

1. Acessar Cloudflare Pages → projeto `nexus-cientifico-site` → Custom domains
2. Adicionar `nexuscientifico.com.br` e `www.nexuscientifico.com.br`
3. Cloudflare gerencia automaticamente o SSL e o roteamento (sem configuração DNS manual necessária se o domínio já estiver na Cloudflare)
