// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');  // Agora você importa a conexão do banco

const app = express();
const port = 3002;

// Configuração do body-parser para receber dados no formato JSON
app.use(bodyParser.json());

// 1. **Cadastrar um Usuário**
app.post('/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senha], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar usuário:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar usuário' });
    }
    res.status(201).json({ id: result.insertId, nome, email });
  });
});

// 2. **Atualizar os Dados de um Usuário**
app.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  const query = 'UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?';
  db.query(query, [nome, email, senha, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar usuário:', err);
      return res.status(500).json({ message: 'Erro ao atualizar usuário' });
    }
    res.status(200).json({ message: 'Usuário atualizado com sucesso' });
  });
});

// 3. **Listar todos os Usuários**
app.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao listar usuários:', err);
      return res.status(500).json({ message: 'Erro ao listar usuários' });
    }
    res.status(200).json(results);
  });
});

// 4. **Login de um Usuário**
app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, results) => {
    if (err) {
      console.error('Erro ao fazer login:', err);
      return res.status(500).json({ message: 'Erro ao fazer login' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Email ou senha incorretos' });
    }
    res.status(200).json({ message: 'Login bem-sucedido', usuario: results[0] });
  });
});

// 5. **Cadastrar um Contato**
app.post('/contatos', (req, res) => {
  const { usuario_id, nome_contato, telefone, email_contato } = req.body;
  const query = 'INSERT INTO contatos (usuario_id, nome_contato, telefone, email_contato) VALUES (?, ?, ?, ?)';
  db.query(query, [usuario_id, nome_contato, telefone, email_contato], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar contato:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar contato' });
    }
    res.status(201).json({ id: result.insertId, nome_contato, telefone, email_contato });
  });
});

// 6. **Atualizar um Contato**
app.put('/contatos/:id', (req, res) => {
  const { id } = req.params;
  const { nome_contato, telefone, email_contato } = req.body;
  const query = 'UPDATE contatos SET nome_contato = ?, telefone = ?, email_contato = ? WHERE id = ?';
  db.query(query, [nome_contato, telefone, email_contato, id], (err, result) => {
    if (err) {
      console.error('Erro ao atualizar contato:', err);
      return res.status(500).json({ message: 'Erro ao atualizar contato' });
    }
    res.status(200).json({ message: 'Contato atualizado com sucesso' });
  });
});

// 7. **Deletar um Contato**
app.delete('/contatos/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM contatos WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Erro ao deletar contato:', err);
      return res.status(500).json({ message: 'Erro ao deletar contato' });
    }
    res.status(200).json({ message: 'Contato deletado com sucesso' });
  });
});

// 8. **Listar Contatos**
app.get('/contatos', (req, res) => {
  const query = 'SELECT * FROM contatos';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao listar contatos:', err);
      return res.status(500).json({ message: 'Erro ao listar contatos' });
    }
    res.status(200).json(results);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
