# API de Catraca Virtual

> API desenvolvida em Node.js com foco em automação de testes de backend, validação de regras de negócio e testes de estado.

## Sobre o Projeto
Este laboratório simula o backend de uma catraca de eventos. O objetivo principal não é apenas a funcionalidade, mas a **garantia de qualidade e prevenção de fraudes** através de testes automatizados estruturados.

A API possui memória de estado, garantindo que a mesma credencial (ingresso) não seja utilizada duas vezes para obter acesso, retornando os devidos códigos de status HTTP (Caminhos Felizes e Tristes).

## Tecnologias e Ferramentas
* **Linguagem & Backend:** JavaScript, Node.js, Express
* **Framework de Testes:** Jest
* **Testes de API HTTP:** Supertest
* **Relatórios Visuais:** Jest HTML Reporter
* **CI/CD:** GitHub Actions (Pipeline de testes automáticos)
* **Infraestrutura:** Docker

## Como executar os testes localmente

Se você possui o Node.js instalado na sua máquina (Testado em ambiente Linux/Pop!_OS):

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/api-catraca.git](https://github.com/SEU_USUARIO/api-catraca.git)
   cd api-catraca

2. Instale as dependências:
   ```bash
   npm install

3. Execute a suíte de testes do Jest:
   ```bash
   npx jest

## Como executar via Docker (Isolado)

Se você prefere não instalar dependências locais, o projeto está totalmente containerizado.

1. Construa a imagem da API:
   ```bash
   docker build -t lab-qa-catraca .

2. Rode o container para executar a esteira de testes:
    ```bach   
    docker run lab-qa-catraca


## Cenários Cobertos (Test Cases)

[✅ PASS] Deve liberar o acesso e retornar status 200 para um ingresso válido.

[✅ PASS] Deve retornar status 400 se nenhum código for enviado na requisição.

[✅ PASS] Deve retornar status 409 ao tentar usar o mesmo ingresso duas vezes (Bloqueio de Fraude).