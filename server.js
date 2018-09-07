const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const endpoints = require('./endpoints/endpoints');
const port = process.env.PORT || 5000;
server.use(bodyParser.json());

server.use('/projects', endpoints);

server.listen(port, () => {
console.log(`Server running on port ${port}`);
 });