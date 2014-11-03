const fs = require('fs');
const path = require('path');
const express = require('express');
const routeBuilder = require('express-routebuilder');

const modules = fs.readdirSync(path.join(__dirname, 'modules'));

var app = express();
var namespace = "/api/0/"

app.use(function (req, res, next) {
  req.account = { isAdmin: function () { return true; } };
  next();
});

var exercise_routes = require('./modules/exercises/routes');
console.log(exercise_routes);
var subapp = routeBuilder(express, exercise_routes);
app.use(namespace, subapp);

var objective_routes = require('./modules/objectives/routes');
console.log(objective_routes);
var subapp = routeBuilder(express, objective_routes);
app.use(namespace, subapp);

module.exports = app;