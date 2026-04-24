const request = require('supertest');
const app = require('./app');

describe('Laboratório de QA: API de Catraca Virtual', () => {
    
    it('Deve liberar o acesso e retornar status 200 para um ingresso válido', async () => {
        const resposta = await request(app)
            .post('/validar-ingresso')
            .send({ codigo: 'ING-12345' });

        expect(resposta.status).toBe(200);
    });

    it('Deve retornar status 400 se nenhum código for enviado na requisição', async () => {
        const resposta = await request(app)
            .post('/validar-ingresso')
            .send({}); 

        expect(resposta.status).toBe(400);
    });

    it('Deve retornar status 409 ao tentar usar o mesmo ingresso duas vezes', async () => {
        const ingresso = { codigo: 'ING-DUPLICADO' };

        // Primeira tentativa: a pessoa passa na catraca normalmente
        await request(app)
            .post('/validar-ingresso')
            .send(ingresso);

        // Segunda tentativa logo em seguida com o mesmo código: a catraca deve barrar!
        const respostaBarrada = await request(app)
            .post('/validar-ingresso')
            .send(ingresso);

        expect(respostaBarrada.status).toBe(409);
        expect(respostaBarrada.body.erro).toBe('Ingresso já utilizado!');
    });

});