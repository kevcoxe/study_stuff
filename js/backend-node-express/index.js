// server.js
const express = require('express');
const fetch = require('node-fetch');
const redisClient = require('./redis-client');

const app = express();
const PORT = process.env.PORT || 3000;


// Utils
// =====================================

const fetchData = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .catch(error => error);
};


// Redis API
// =====================================

app.get('/api/store/:key', async (req, res) => {
    const { key } = req.params;
    const value = req.query;
    await redisClient.setAsync(key, JSON.stringify(value));
    return res.send('Success');
});


app.get('/api/:key', async (req, res) => {
    const { key } = req.params;
    const rawData = await redisClient.getAsync(key);
    return res.json(JSON.parse(rawData));
});


// API
// =====================================

app.get('/api', (req, res) => {
  return res.send('hello, welcome to the api');
});


app.get('/api/posts', async (req, res) => {
  fetchData('https://jsonplaceholder.typicode.com/posts').then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error)
    return res.json(error);
  });
});


app.get('/api/comments', async (req, res) => {
  fetchData('https://jsonplaceholder.typicode.com/comments').then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error)
    return res.json(error);
  });
});


app.get('/api/photos', async (req, res) => {
  fetchData('https://jsonplaceholder.typicode.com/photos').then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error)
    return res.json(error);
  });
});


app.get('/api/todos', async (req, res) => {
  fetchData('https://jsonplaceholder.typicode.com/todos').then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error)
    return res.json(error);
  });
});


app.get('/api/users', async (req, res) => {
  fetchData('https://jsonplaceholder.typicode.com/users').then((data) => {
    return res.json(data);
  }).catch((error) => {
    console.log(error)
    return res.json(error);
  });
});


// RUN
// =====================================
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
