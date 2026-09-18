const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Ramya! Top 1% DevOps Engineer." });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Application running securely on port ${port}`);
});
