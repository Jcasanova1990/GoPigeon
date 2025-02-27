const express = require('express');
const path = require('path');
const logger = require('morgan');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger('dev'));

// Serve static files correctly
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.use('/sounds', express.static(path.join(__dirname, 'public', 'sounds')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

// Remove or comment out this line:
// app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

// Catch-all route for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

module.exports = app;
