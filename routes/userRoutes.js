// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userModel = require('../models/user');

// Rota para criar um novo usuário
router.post('/create', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const result = await userModel.createUser(name, email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso!', userId: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar usuário', error: err.message });
  }
});

// Rota para listar todos os usuários
router.get('/all', async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao listar usuários', error: err.message });
  }
});

// Rota para atualizar usuário
router.put('/update/:id', async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  try {
    const result = await userModel.updateUser(id, name, email, password);
    res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
  }
});

// Rota para deletar usuário
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao deletar usuário', error: err.message });
  }
});

module.exports = router;
