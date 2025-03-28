// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactModel = require('../models/contact');

// Rota para criar um novo contato
router.post('/create', async (req, res) => {
  const { userId, name, phone, email } = req.body;
  try {
    const result = await contactModel.createContact(userId, name, phone, email);
    res.status(201).json({ message: 'Contato criado com sucesso!', contactId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar contato', error: err.message });
  }
});

// Rota para listar todos os contatos de um usuário
router.get('/all/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const contacts = await contactModel.getContacts(userId);
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar contatos', error: err.message });
  }
});

// Rota para atualizar contato
router.put('/update/:id', async (req, res) => {
  const { name, phone, email } = req.body;
  const { id } = req.params;
  try {
    const result = await contactModel.updateContact(id, name, phone, email);
    res.status(200).json({ message: 'Contato atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar contato', error: err.message });
  }
});

// Rota para deletar contato
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await contactModel.deleteContact(id);
    res.status(200).json({ message: 'Contato deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar contato', error: err.message });
  }
});

module.exports = router;
