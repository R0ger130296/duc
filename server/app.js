const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Patos = require('./patos/patos');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/mallar', (req, res) => {
    const patos = new Patos();
    console.log("MALLAR");
    console.log(patos.mallar());
});
app.get('/caucho', (req, res) => {
    const patos = new Patos();
    console.log("CAUCHO");
    console.log(patos.patoCaucho());
});
app.get('/metal', (req, res) => {
    const patos = new Patos();
    console.log("METAL");
    console.log(patos.patoMecanico());
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});