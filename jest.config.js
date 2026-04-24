module.exports = {
  // Diz ao Jest para mostrar o resultado no terminal (default) E gerar o HTML
  reporters: [
    "default",
    ["jest-html-reporter", {
      "pageTitle": "Relatório de Qualidade - Catraca Virtual",
      "outputPath": "./relatorio-testes.html",
      "includeFailureMsg": true
    }]
  ]
};