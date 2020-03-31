const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  res.send('<h1> Hello, world! </h1>')
})

app.listen(3333);