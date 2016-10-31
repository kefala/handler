var compression = require('compression');
var express = require('express');
var app = express();

app.use(compression());

app.use(express.static('server/public/'));

app.listen(3000, function () {});