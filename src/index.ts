import { Hono } from 'hono';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { createMcpServer } from './server.js';
import { ALL_CATEGORIES } from './knowledge/index.js';

const app = new Hono();

// Landing page
app.get('/', (c) => {
  const categoriesList = ALL_CATEGORIES
    .map((cat) => `<li><strong>${cat.name}</strong> — ${cat.description}</li>`)
    .join('\n            ');

  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OZAV MCP Server</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background: #fff;
      color: #1a1a1a;
      line-height: 1.6;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 60px 24px;
    }
    .logo {
      font-size: 28px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 4px;
    }
    .logo span { color: #FF5900; }
    .badge {
      display: inline-block;
      background: #f5f5f5;
      color: #666;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 10px;
      border-radius: 20px;
      margin-bottom: 32px;
    }
    h1 {
      font-size: 36px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }
    h1 span { color: #FF5900; }
    .subtitle {
      font-size: 18px;
      color: #555;
      margin-bottom: 48px;
      max-width: 600px;
    }
    h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 16px;
      margin-top: 48px;
      letter-spacing: -0.3px;
    }
    .install-section {
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 10px;
      padding: 24px;
      margin-bottom: 16px;
    }
    .install-section h3 {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .install-section .icon {
      width: 20px;
      height: 20px;
      background: #FF5900;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 11px;
      font-weight: 700;
    }
    pre {
      background: #1a1a1a;
      color: #e0e0e0;
      padding: 16px 20px;
      border-radius: 8px;
      overflow-x: auto;
      font-size: 13px;
      line-height: 1.5;
      font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    }
    pre .comment { color: #666; }
    pre .string { color: #FF5900; }
    .categories-list {
      list-style: none;
      display: grid;
      gap: 12px;
      margin-top: 16px;
    }
    .categories-list li {
      padding: 14px 18px;
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 8px;
      font-size: 14px;
    }
    .categories-list li strong {
      color: #1a1a1a;
    }
    .footer {
      margin-top: 64px;
      padding-top: 24px;
      border-top: 1px solid #eee;
      font-size: 13px;
      color: #999;
    }
    .footer a {
      color: #FF5900;
      text-decoration: none;
      font-weight: 500;
    }
    .footer a:hover { text-decoration: underline; }
    .endpoint {
      display: inline-block;
      background: #fff3ed;
      color: #FF5900;
      font-family: 'SF Mono', monospace;
      font-size: 13px;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 500;
    }
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-top: 16px;
    }
    .feature {
      padding: 16px;
      background: #fafafa;
      border: 1px solid #eee;
      border-radius: 8px;
    }
    .feature strong {
      display: block;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .feature span {
      font-size: 13px;
      color: #666;
    }
    @media (max-width: 600px) {
      .features { grid-template-columns: 1fr; }
      h1 { font-size: 28px; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">OZAV<span>.</span></div>
    <div class="badge">MCP Server v1.0.0</div>

    <h1>Expertise em cambio internacional<span>,</span> direto na sua IA<span>.</span></h1>
    <p class="subtitle">
      Servidor MCP publico que conecta IAs a 15 categorias de conhecimento sobre
      cambio, IOF, contas nos EUA, stablecoins, cartoes internacionais e pagamentos B2B.
    </p>

    <div class="features">
      <div class="feature">
        <strong>15 Categorias</strong>
        <span>Base de conhecimento completa sobre cambio e pagamentos internacionais</span>
      </div>
      <div class="feature">
        <strong>Busca Semantica</strong>
        <span>Tool search_ozav que encontra respostas relevantes em qualquer tema</span>
      </div>
      <div class="feature">
        <strong>3 Prompt Templates</strong>
        <span>Consulta, comparativo e simulacao de economia prontos para uso</span>
      </div>
      <div class="feature">
        <strong>Streamable HTTP</strong>
        <span>Protocolo MCP moderno via POST /mcp</span>
      </div>
    </div>

    <h2>Instalar no Claude Code</h2>
    <div class="install-section">
      <h3><span class="icon">C</span> Claude Code (CLI)</h3>
      <pre>claude mcp add ozav --transport streamable-http <span class="string">https://mcp.ozav.io/mcp</span></pre>
    </div>

    <h2>Instalar no Cursor</h2>
    <div class="install-section">
      <h3><span class="icon">&#9998;</span> Cursor Settings &rarr; MCP Servers</h3>
      <pre>{
  <span class="string">"mcpServers"</span>: {
    <span class="string">"ozav"</span>: {
      <span class="string">"url"</span>: <span class="string">"https://mcp.ozav.io/mcp"</span>
    }
  }
}</pre>
    </div>

    <h2>Instalar no VS Code</h2>
    <div class="install-section">
      <h3><span class="icon">VS</span> .vscode/mcp.json</h3>
      <pre>{
  <span class="string">"servers"</span>: {
    <span class="string">"ozav"</span>: {
      <span class="string">"type"</span>: <span class="string">"http"</span>,
      <span class="string">"url"</span>: <span class="string">"https://mcp.ozav.io/mcp"</span>
    }
  }
}</pre>
    </div>

    <h2>Endpoint</h2>
    <p style="margin-top: 8px; font-size: 15px;">
      MCP Streamable HTTP: <span class="endpoint">POST /mcp</span>
    </p>

    <h2>Categorias de Conhecimento</h2>
    <ul class="categories-list">
            ${categoriesList}
    </ul>

    <div class="footer">
      <p>
        Feito por <a href="https://ozav.io" target="_blank">OZAV</a> —
        Cambio inteligente via stablecoins.
      </p>
    </div>
  </div>
</body>
</html>`;

  return c.html(html);
});

// MCP Streamable HTTP endpoint — handles POST, GET, DELETE
app.all('/mcp', async (c) => {
  const server = createMcpServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless mode
  });

  await server.connect(transport);

  const response = await transport.handleRequest(c.req.raw);

  return response;
});

export default app;
