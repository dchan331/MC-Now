const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./routes');
const axios = require('axios');
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));

app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', api);

app.get('/*', (req, res) => {
  var reactPath = path.join(__dirname, '../public/index.html');
  res.sendFile(reactPath);
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

module.exports = app;
