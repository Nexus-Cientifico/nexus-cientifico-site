# ADR 003 — Estratégia de Hospedagem

**Status:** Aceito  
**Data:** 2026-06-27  
**Decisores:** Chris (Proprietário), Claude (Arquiteto)

---

## Contexto

O site precisa de hospedagem confiável, com HTTPS, deploy rápido e custo zero adicional ao que já é pago.

## Decisão

**Netlify** — plano gratuito (Hobby).

## Comparativo

| Critério | Netlify (Free) | HostGator atual | GitHub Pages |
|---|---|---|---|
| HTTPS automático | ✅ | ⚠️ manual | ✅ |
| Deploy automático (Git) | ✅ | ❌ | ✅ |
| CDN global | ✅ | ❌ | ⚠️ limitado |
| Custom domain | ✅ | ✅ | ✅ |
| Build automático (Vite) | ✅ | ❌ | ⚠️ via Actions |
| Forms sem backend | ✅ | ❌ | ❌ |
| Preview de PRs | ✅ | ❌ | ❌ |
| Custo adicional | R$ 0 | R$ 0 (já pago) | R$ 0 |

## Justificativa

1. **Deploy automático**: conecta o repositório GitHub e faz build + deploy a cada push
2. **CDN global**: site carrega rápido para visitantes de qualquer lugar do Brasil
3. **HTTPS grátis**: certificado SSL automático via Let's Encrypt
4. **Netlify Forms**: formulário de contato sem precisar de backend
5. **Preview URLs**: cada branch/PR tem URL própria para testar antes de publicar

## Como Fazer o Deploy

```bash
# 1. Criar conta em netlify.com (grátis)
# 2. Conectar repositório GitHub
# 3. Configurar build:
#    Build command: npm run build
#    Publish directory: dist
# 4. Configurar domínio customizado: editoranexuscientifico.online
```

## Configuração (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Domínio

- Domínio atual: `editoranexuscientifico.online` (HostGator)
- Ação: apontar DNS do HostGator para Netlify (manter domínio, mudar hospedagem)
- O HostGator continua sendo usado apenas para o domínio

## Consequências

- HostGator: manter apenas para gerenciar o domínio (`editoranexuscientifico.online`)
- O site builder do HostGator pode ser desativado (não paga pelo builder separadamente)
- Netlify gratuito tem limite de 100GB de bandwidth/mês — mais que suficiente para esta fase
