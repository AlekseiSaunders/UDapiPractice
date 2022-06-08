const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (request, response) => {
  response.send(`<h1>Hello</h1>`);
});

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running, listening on Port: ${PORT}`)
);
