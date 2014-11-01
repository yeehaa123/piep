const express = require('express');
const routeBuilder = require('express-routebuilder');

var app = express();

app.use(function (req, res, next) {
  req.account = { isAdmin: function () { return true; } };
  next();
});

var routes = require('./modules/exercises/routes');
console.log(routes);
app.use('/', routeBuilder(express, routes));


module.exports = app;