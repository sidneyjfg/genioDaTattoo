# Use uma imagem base oficial do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta em que o aplicativo será executado
EXPOSE 21023

# Comando para rodar a aplicação
CMD ["node", "api/app.js"]
