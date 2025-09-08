const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

app.use(cors());
app.use(express.json());

app.get('/transactions', async (req, res) => {
  const transactions = await db.getTransactions();
  res.json(transactions);
});

app.post('/transactions', async (req, res) => {
  const { description, amount } = req.body;
  const newTx = await db.addTransaction(description, amount);
  res.json(newTx);
});

app.listen(3000, () => console.log('Server running on port 3000'));
