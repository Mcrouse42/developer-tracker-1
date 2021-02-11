const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));