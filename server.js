// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const dreamRoutes = require('./routes/dreams');
app.use(express.static('public'));

// Middleware
app.use(express.json());
app.use('/api/dreams', dreamRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("🌙 Connected to MongoDB");
  app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
})
.catch((err) => console.error("DB connection error:", err));
