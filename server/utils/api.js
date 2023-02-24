const axios = require('axios');

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

module.exports = api;
