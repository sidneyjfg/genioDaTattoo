# genioDaTattoo
Este projeto tem como intuito ajudar um amigo criando um projeto que simule uma roleta de prêmios e aplicar conhecimentos de React, dockers criação de uma "api" com express e node.

## Criando o projeto:
- Criar o Projeto em react com nome _genio-da-tattoo_

`npx create-react-app genio-da-tattoo`

## Criando o servidor express chamado api
- Criar em todo o projeto o servidor express

`npx express-generator api`

- Ir até o diretório da Api

`cd api`

- Para instalar as dependências necessárias

`npm install`

- instale o banco de dados Mysql
`npm install mysql`

Diretório api -> [Api](./api/)

Diretório Front React -> [Front](./genio-da-tattoo/)

# Criando um Container docker
- Necessário primeiramente criar 2 arquivos em cada diretório isto é no diretório da _Api_ deve ter um Dockerfile e no diretório do Front também, visto que o docker terá como função criar imagens dessas 2 aplicações e subir automaticamente.

- Em seguida será necessário criar um arquivo na raiz, fora da Api e do Front, com o nome [docker-compose.yml](./docker-compose.yml), não é obrigatório este nome.

# Limpeza de conteiner caso necessário
## Limpeza Completa:
- Os comandos `docker-compose down --volumes --rmi all` e `docker system prune -a` garantem que todas as instâncias anteriores sejam removidas, evitando conflitos.


# Foi adicionado 2 branchs diferentes 

- linux
- windows
No intuito de saber de qual máquina fiz o commit visto que utilizo Linux e Windows para este projeto