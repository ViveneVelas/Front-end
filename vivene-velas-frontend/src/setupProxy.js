// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/host',  // Quando o frontend fizer uma requisição para /host, será redirecionado
    createProxyMiddleware({
      target: 'http://localhost:8080',  // O IP e a porta do seu backend
      changeOrigin: true,  // Modifica o cabeçalho "Origin" para o target (backend)
      pathRewrite: {
        '^/host': '',  // Remove o /host do caminho antes de encaminhar para o backend
      },
    })
  );
};
