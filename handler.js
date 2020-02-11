'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');

app.get('/tasks', function (req, res) {

  const someTasks = [
    {
      taskId: uuidv4(),
      description: "Buy some milk",
      completed: false
    },
    {
      taskId: uuidv4(),
      description: "Test API in postman",
      completed: false
    }
  ]
  
  res.json({
    tasks: someTasks
  });
});

app.post('/tasks', function (req, res) {
  res.json({
    message: 'Your POST works',
  });
});

app.put('/tasks/:taskId', function (req, res) {
  res.json({
    message: 'Your PUT works',
  });
});

app.delete('/tasks/:taskId', function (req, res) {
  res.json({
    message: 'Your DELETE works',
  });
});


module.exports.tasks = serverless(app);
