const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Patos = require('./patos/patos');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/Fly', (req, res) => {
    const patos = new Patos();
    res.send(patos.mallar())
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});