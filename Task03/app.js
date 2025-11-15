const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: false }));

const formRouter = require('./routes/form');
app.use('/', formRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;