const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes =  require('./routes/routes.js');

// Makes our server
const app = express();
const PORT = 3001;

// Use middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files - to directory
app.use(express.static(path.join(__dirname, '../../client')));

app.use('/api', routes);

app.use('*', (req, res) => res.status(404).send('This page does not exist'));

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}!`);
})