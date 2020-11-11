import { createConnection } from 'typeorm';

createConnection()
    .then(() => console.log('Banco conectado'))
    .catch((error) => console.log(`Erro ao se conectar com o banco: ${error.message}`));
