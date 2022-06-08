const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send(`<h1>Hello</h1>`);
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running, listening on Port: ${PORT}`)
);
