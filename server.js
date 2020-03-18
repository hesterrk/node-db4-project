const express = require('express');

const recipeRouter = require('./recipes/recipes-router')
const ingreRoute = require('./ingredients/ingredients-router')

//install helmet
const helmet = require("helmet");


const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingreRoute)



server.use((err, req, res, next) => {
    res.status(500).json({
      message: "Something went wrong"
    });
  });
  
  server.use((req, res) => {
    res.status(404).json({
      message: "Your request is not found"
    });
  });
  
  module.exports = server;
  