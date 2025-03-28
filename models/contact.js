// models/contact.js
const db = require('../config/db');

// Função para criar um novo contato
const createContact = (userId, name, phone, email) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO contacts (user_id, name, phone, email) VALUES (?, ?, ?, ?)';
    db.query(query, [userId, name, phone, email], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para listar todos os contatos
const getContacts = (userId) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM contacts WHERE user_id = ?';
    db.query(query, [userId], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para atualizar contato
const updateContact = (id, name, phone, email) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE contacts SET name = ?, phone = ?, email = ? WHERE id = ?';
    db.query(query, [name, phone, email, id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Função para deletar contato
const deleteContact = (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM contacts WHERE id = ?', [id], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { createContact, getContacts, updateContact, deleteContact };
