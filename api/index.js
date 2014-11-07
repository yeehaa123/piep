const express = require('express');
const routeBuilder = require('express-routebuilder');

var app = express();
var namespace = "/api/0/";

app.use(require('./middleware/cors'));

app.use(function (req, res, next) {
  req.account = { isAdmin: function () { return true; } };
  next();
});

var modules = ["resources", "objectives", "lists", "list-resources"];

modules.forEach(function (module){
  var routes = require('./modules/' + module + '/routes');
  var subapp = routeBuilder(express, routes);
  app.use(namespace + module, subapp);
});

module.exports = app;
