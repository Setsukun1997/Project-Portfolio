const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(package.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/data', (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.listen(3000, () => {
  console.log('Server running on https://project-portfolio-8gix.onrender.com/');
});


