// server.js
const fetch = require('node-fetch');
const express = require('express');
const app = express();


const fetchData = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .catch(error => error);
}

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
