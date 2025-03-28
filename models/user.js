// models/user.js
const db = require('../config/db');

// Função para criar um novo usuário
const createUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para listar todos os usuários
const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para atualizar usuário
const updateUser = (id, name, email, password) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
    db.query(query, [name, email, password, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para deletar usuário
const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
