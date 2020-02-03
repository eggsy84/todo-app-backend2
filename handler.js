'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (req, res) {
  res.send('Hello World!');
});

module.exports.tasks = serverless(app);
