"use strict";

var express = require('express');

var handlebars = require('express-handlebars');

var route = require('./src/routes');

var path = require('path');

var app = express();
var port = 4000;

var db = require('./src/config/db');

db.connect();
app.use(express["static"]('src/public'));
app.use(express.urlencoded({
  extended: true
})); //log data object

app.use(express.json());
route(app); //template engine

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});