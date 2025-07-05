// routes/dreams.js
const express = require('express');
const router = express.Router();
const Dream = require('../models/Dream');

// CREATE
router.post('/', async (req, res) => {
  try {
    const newDream = new Dream(req.body);
    const saved = await newDream.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ALL
router.get('/', async (req, res) => {
  const dreams = await Dream.find().sort({ date: -1 });
  res.json(dreams);
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updated = await Dream.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Dream.findByIdAndDelete(req.params.id);
    res.json({ message: 'Dream deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
