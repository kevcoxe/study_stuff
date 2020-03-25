import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


const getData = async (url, callback) => {
  await axios.get(url)
    .then(res => {
      console.log(res.data);
      callback(res.data);
    })
    .catch(err => console.log(err));
};


function Posts() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await getData('/api/posts', setPosts);
  };

  return (
    <div>
      <button onClick={() => getPosts()}>Get Posts</button>
      {posts.map(post => {
        return (<p key={post.id}>{ post.title }</p>)
      })}
    </div>
  )
}


function Comments() {

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    await getData('/api/comments', setComments);
  };

  return (
    <div>
      <button onClick={() => getComments()}>Get Comments</button>
      {comments.map(comment => {
        return (<p key={comment.id}>{ comment.name }</p>)
      })}
    </div>
  )
}


function Todos() {

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    await getData('/api/todos', setTodos);
  };

  return (
    <div>
      <button onClick={() => getTodos()}>Get Todos</button>
      {todos.map(todo => {
        return (<p key={todo.id}>{ todo.title }</p>)
      })}
    </div>
  )
}


function Users() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await getData('/api/users', setUsers);
  };

  return (
    <div>
      <button onClick={() => getUsers()}>Get Users</button>
      {users.map(user => {
        return (<p key={user.id}>{ user.name }</p>)
      })}
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Users />
        <Posts />
        <Comments />
        <Todos />
      </header>
    </div>
  );
}

export default App;
