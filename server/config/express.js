var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(cors())
app.options('*', cors())

app.set('secret', 'comandaDoTroll');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

module.exports = app;
