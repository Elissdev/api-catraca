const express = require('express');
const app = express();
app.use(express.json());

const ingressosUsados = [];

app.post('/validar-ingresso', (req, res) => {
    const { codigo } = req.body;

    // Caminho Triste 1: Esqueceu o código
    if (!codigo) {
        return res.status(400).json({ erro: 'Código do ingresso é obrigatório.' });
    }

    // NOVO Caminho Triste 2: Verifica se o ingresso já está na prancheta
    if (ingressosUsados.includes(codigo)) {
        return res.status(409).json({ erro: 'Ingresso já utilizado!' });
    }

    // Caminho Feliz: O ingresso é válido e inédito. Guardar na prancheta e liberar.
    ingressosUsados.push(codigo);
    return res.status(200).json({ mensagem: 'Acesso Liberado!' });
});

module.exports = app;