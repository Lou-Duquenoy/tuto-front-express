const express = require('express');
const cors = require('cors');
const sequelize = require('./models');

const app = express();
const port = 3000;

app.use(cors())

// traiter le corps de ma requête si c'est du JSON
app.use(express.json());