// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/java-api', 
        createProxyMiddleware({
            target: 'http://98.84.38.39:8080', 
            changeOrigin: true, 
        })
    );
};
