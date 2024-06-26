# Serverless CRUD API

Este projeto implementa uma API CRUD (Create, Read, Update, Delete) usando Node.js, Express.js e AWS DynamoDB, com suporte a execução serverless usando AWS Lambda.

## Funcionalidades

- **GET /users/:userId**: Busca um usuário pelo ID.
- **POST /users**: Cria um novo usuário.
- **PUT /users/:userId**: Atualiza um usuário existente.
- **DELETE /users/:userId**: Deleta um usuário existente.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o seguinte instalado:

- Node.js (v14 ou superior)
- npm (geralmente instalado com o Node.js)
- Conta AWS com permissões para criar e gerenciar recursos DynamoDB e Lambda
- AWS CLI configurado com suas credenciais AWS

## Técnologias utilizadas
- [Serveless Framework](https://www.serverless.com/) :para criaçao e integraçao de todo desenvolvimento diretamente com a AWS

- [AWS SDK for JavaScript](https://aws.amazon.com/pt/sdk-for-javascript/): fornece todas a ferrementas necessarias para o desenvolvimento no ambiente AWS


## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/serverless-crud-api.git
   cd serverless-crud-api

2. **Deploy na Aws**
  - tenha uma conta na aws 
  - intstale o serveless framework 
  - vincule o server framework com sua conta aws
  - rode um npm install
  - rode serverless deploy --debug 
