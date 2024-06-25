// import { Client } from 'pg'
// const {Client} = require('pg')

import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

export const handler = async (event) => {
  // TODO implement

  //   const createTableQuery = `
  //   CREATE TABLE IF NOT EXISTS funcionarios (
  //     id SERIAL PRIMARY KEY,
  //     nome VARCHAR(100) NOT NULL,
  //     idade INT NOT NULL,
  //     cargo VARCHAR(100) NOT NULL
  //   );
  // `;

  // const createTable = async () => {
  //   try {
  //     await client.connect();
  //     await client.query(createTableQuery);
  //     console.log("Tabela 'funcionarios' criada com sucesso.");
  //   } catch (err) {
  //     console.error('Erro ao criar a tabela:', err);
  //   } finally {
  //     await client.end();
  //   }
  // };

  // createTable();

  try {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    console.log(result.rows[0].now, 'RODOU');
  } catch (error) {
    console.error('Error executing query:', error.stack);
  } finally {
    await client.end();
  }

  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify('Hello from Lambda!'),
  // };

  // return response;
};
