'use strict';

const app = require('./app.js');
const express = require('express');
const greenlock = require('greenlock-express');

const server = express();

greenlock.init({
  packageRoot: __dirname,
  // contact for security and critical bug notices
  maintainerEmail: "username@email.com",
  // where to look for configuration
  configDir: './greenlock.d',
  // whether or not to run at cloudscale
  cluster: false
}).serve(app);

// Mount the Express app
server.use(app);

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});