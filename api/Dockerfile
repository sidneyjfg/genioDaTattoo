# Dockerfile na pasta api

# Usando a imagem base do Node.js
FROM node:14

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o código da API para o diretório de trabalho
COPY . .

# Expondo a porta em que a API será executada
EXPOSE 9000

# Comando para rodar a aplicação
CMD ["node", "app.js"]