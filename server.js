const express = require('express');
const cors = require('cors');
const path = require('path'); 

const app = express();
app.use(cors());
app.use(express.json()); 

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/data', (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log('Server running on https://project-portfolio-8gix.onrender.com/);
});
