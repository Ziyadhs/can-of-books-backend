"use strict";

const express = require("express");
const server = express(); 
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER

mongoose.connect(`${MONGO_SERVER}`);

const { getBookHandler, createBookHandler, deleteBookHandler,} = require("./modules/bookHandler");

// Routes
server.get('/', homeRouteHandler);
server.get('/getBook', getBookHandler);
server.post('/createBook', createBookHandler);
server.delete('/deleteBook', deleteBookHandler);
server.get('*', notFoundHandler);

// Function Handlers
function homeRouteHandler(req, res) {
    res.send('home route');
  }
  
  function notFoundHandler(req, res) {
    res.status(404).send('NOT FOUND!!');
  }
  
  server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });