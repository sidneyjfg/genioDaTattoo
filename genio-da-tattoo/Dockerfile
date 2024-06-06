# Dockerfile na pasta genio-da-tattoo

# Usando a imagem base do Node.js
FROM node:14

# Definindo o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiando o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando todo o código do front-end para o diretório de trabalho
COPY . .

# Compilando a aplicação React para produção
RUN npm run build

# Instalando o servidor estático para servir a aplicação
RUN npm install -g serve

# Expondo a porta em que a aplicação será servida
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["serve", "-s", "build"]
