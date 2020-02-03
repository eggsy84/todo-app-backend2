'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function (req, res) {
  res.json({
    message: 'Your API works',
  });
});

module.exports.tasks = serverless(app);
