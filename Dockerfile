# 1. Linux pronto com Node.js (versão 20)
FROM node:20-alpine

# 2. Criei uma pasta de trabalho lá dentro chamada /app
WORKDIR /app

# 3. Copiei o arquivo de dependências (package.json) para dentro do container, na pasta /app
COPY package*.json ./

# 4. Instalei as ferramentas (Express, Jest, Supertest) dentro do container
RUN npm install

# 5. Copiei o resto do código (app.js, testes, etc.) para dentro da pasta
COPY . .

# 6. O comando que o container vai executar sozinho quando for ligado
CMD ["npx", "jest"]