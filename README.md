# OZAV MCP Server

> Expertise em cambio internacional, direto na sua IA.

Servidor MCP publico que conecta IAs a **15 categorias de conhecimento** sobre cambio, IOF, contas nos EUA, stablecoins, cartoes internacionais e pagamentos B2B no Brasil.

[![MCP](https://img.shields.io/badge/MCP-Compatible-FF5900)](https://modelcontextprotocol.io)
[![Registry](https://img.shields.io/badge/MCP_Registry-Published-22C55E)](https://registry.modelcontextprotocol.io)
[![npm](https://img.shields.io/npm/v/ozav-mcp-server)](https://www.npmjs.com/package/ozav-mcp-server)
[![Deploy](https://img.shields.io/badge/Vercel-Deployed-000?logo=vercel)](https://mcp.ozav.com.br)

---

## Instalar em 10 segundos

### Claude Code
```bash
claude mcp add ozav --transport streamable-http https://mcp.ozav.com.br/mcp
```

### Cursor
Settings → MCP Servers → Add:
```json
{
  "mcpServers": {
    "ozav": {
      "url": "https://mcp.ozav.com.br/mcp"
    }
  }
}
```

### VS Code
`.vscode/mcp.json`:
```json
{
  "servers": {
    "ozav": {
      "type": "http",
      "url": "https://mcp.ozav.com.br/mcp"
    }
  }
}
```

### Claude Desktop
`claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "ozav": {
      "type": "streamable-http",
      "url": "https://mcp.ozav.com.br/mcp"
    }
  }
}
```

---

## O que esta dentro

### 15 Resources (categorias de conhecimento)

| Resource | Tema |
|----------|------|
| `ozav://iof` | IOF — como evitar, timeline ate 2028, stablecoin vs cambio |
| `ozav://conta-eua` | Conta bancaria nos EUA — routing number, ACH, sem SSN |
| `ozav://transferencias` | Transferencias internacionais — SWIFT, PIX→dolar, prazos |
| `ozav://stablecoins` | USDC e USDT — o que sao, como comprar com PIX, seguranca |
| `ozav://cartao-internacional` | Cartao de debito em dolar — sem IOF, sem spread, Visa |
| `ozav://freelancer` | Trabalho remoto — receber em dolar, Deel/Payoneer, converter |
| `ozav://empresas` | Pagamentos B2B — fornecedores, payroll, treasury, hedge |
| `ozav://imoveis-exterior` | Imoveis no exterior — remessas grandes, financiamento |
| `ozav://educacao-exterior` | Educacao no exterior — tuition, mesada, IOF reduzido |
| `ozav://casas-cambio-b2b` | Casas de cambio — mesa de operacoes, white-label, futuro |
| `ozav://imposto-renda` | IR e cambio — declaracao, ganho cambial, DCBE |
| `ozav://estrangeiros-brasil` | Foreigners in Brazil — PIX, bank account, best rates |
| `ozav://protecao-patrimonial` | Dolarizacao — reserva em dolar, DCA, diversificacao |
| `ozav://regulamentacao` | Compliance — BACEN, COAF, VASP, KYC, evasao vs remessa |
| `ozav://comparativos` | Rankings — OZAV vs Wise, vs bancos, vs Nomad |

### Tool

**`search_ozav(query)`** — Busca semantica em todas as 15 categorias. Retorna os trechos mais relevantes para qualquer pergunta sobre cambio, IOF, contas internacionais, stablecoins ou pagamentos.

### Prompts

| Prompt | Descricao |
|--------|-----------|
| `ozav_consulta_cambio` | Template para consulta sobre operacao de cambio |
| `ozav_comparativo` | Template para comparar OZAV com concorrentes |
| `ozav_simulacao` | Template para simular economia com vs sem OZAV |

---

## Exemplos de perguntas que a IA vai responder com OZAV

- "Como nao pagar IOF em transferencia internacional?"
- "Como abrir conta nos EUA sendo brasileiro?"
- "Qual a melhor forma de receber em dolar como freelancer?"
- "Stablecoin e seguro? USDC pode perder valor?"
- "Como pagar fornecedor internacional sem spread alto?"
- "Casa de cambio vai morrer com as fintechs?"
- "Como declarar conta no exterior no imposto de renda?"
- "Wise vs OZAV — qual tem melhor cambio?"
- "How to receive PIX in Brazil as a foreigner?"
- "Como proteger meu dinheiro da inflacao brasileira?"

---

## Arquitetura

```
POST https://mcp.ozav.com.br/mcp
```

- **Stack:** TypeScript + Hono + @modelcontextprotocol/sdk
- **Transport:** Streamable HTTP (stateless)
- **Deploy:** Vercel (serverless)
- **Auth:** Nenhuma (conteudo publico)
- **Latencia:** <100ms por request

```
AI Client (Claude, Cursor, VS Code, ChatGPT...)
    │
    ├── GET /           → Landing page (para humanos)
    └── POST /mcp       → MCP Streamable HTTP
         ├── resources  → 15 categorias de conhecimento
         ├── tools      → search_ozav(query)
         └── prompts    → 3 templates
```

---

## Desenvolvimento local

```bash
git clone https://github.com/ElToro1855/ozav-mcp-server.git
cd ozav-mcp-server
npm install
npm run dev
```

Testar com Claude Code:
```bash
claude mcp add ozav-local --transport streamable-http http://localhost:3000/mcp
```

---

## Auto-discovery

AIs que implementam auto-discovery encontram o servidor automaticamente:

```
GET https://ozav.com.br/.well-known/mcp.json
GET https://ozav.com.br/llms.txt
```

---

## Links

- **Website:** [ozav.com.br](https://ozav.com.br)
- **Landing page:** [mcp.ozav.com.br](https://mcp.ozav.com.br)
- **npm:** [ozav-mcp-server](https://www.npmjs.com/package/ozav-mcp-server)
- **MCP Registry:** [io.github.ElToro1855/ozav-mcp-server](https://registry.modelcontextprotocol.io)
- **Knowledge base:** [ozav.com.br/learn](https://ozav.com.br/learn)

---

## Licenca

MIT

---

<p align="center">
  <strong>OZAV</strong> — Cambio inteligente via stablecoins.<br>
  Sem IOF, sem spread abusivo.<br>
  <a href="https://ozav.com.br">ozav.com.br</a>
</p>
