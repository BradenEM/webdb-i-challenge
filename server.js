const express = require('express');



const accountsRouter = require('./data/accounts/accounts.js')

const server = express();

server.use(express.json());
server.use('/api/accounts', accountsRouter)

module.exports = server;