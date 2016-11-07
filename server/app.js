var compression = require('compression');
var express = require('express');
var app = express();

var publicFolder = 'server/public/';

app.use(compression());

app.use(express.static(publicFolder));

app.get('/', function (req, res) {
  res.sendfile(publicFolder + 'index.html');
});

app.get('/quienes-somos', function (req, res) {
  res.sendfile(publicFolder + 'index.html');
});

app.get('/contacto', function (req, res) {
  res.sendfile(publicFolder + 'index.html');
});

app.listen(3000, function () {});