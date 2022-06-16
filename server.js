const express = require('express');
const app = express();
const { readFileSync } = require('fs');
const madFish = JSON.parse(readFileSync('./fish.json'));
const cors = require('cors');
const ejs = require('ejs');
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:fishGenera', (request, response) => {
  const fishGen = request.params.fishGenera.toLowerCase();
  if (madFish[fishGen]) {
    console.log(madFish[fishGen]);
    response.status(200);
    response.json(madFish[fishGen]);
  } else {
    response.json(madFish['placeHolder']);
    // res.status(400).json({message: 'Fish Genera Not Found'})
  }
});
app.get('/api/:fishGenera/:fishSpecies', (request, response) => {
  const fishGen = request.params.fishGenera.toLowerCase();
  const fishSpp = request.params.fishSpecies.toLowerCase();
  if (madFish[fishGen][fishSpp]) {
    console.log(madFish[fishGen][fishSpp]);
    response.status(200);
    response.json(madFish[fishGen][fishSpp]);
  } else {
    response.json(madFish['placeHolder']);
    // res.status(400).json({message: 'Fish Genera Not Found'})
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
