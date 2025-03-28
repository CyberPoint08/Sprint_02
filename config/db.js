// config/db.js
const mysql = require('mysql2');

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'XJA2QFU9sMx8F3in',  // Altere para sua senha
  database: 'bd_agenda_contatos'  // Altere para o nome do seu banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
