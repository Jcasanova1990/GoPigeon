const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger('dev'));

// Serve static files from 'public/dist' (assuming Vite outputs there)
app.use(express.static(path.join(__dirname, 'public', 'dist')));

// Serve favicon (ensure it's inside 'img' in the root directory)
app.use(favicon(path.join(__dirname, 'img', 'favicon.ico')));

// Keep access to root-level 'img' and 'sounds' folders
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/sounds', express.static(path.join(__dirname, 'sounds')));

// Catch-all route to serve index.html for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

module.exports = app;
