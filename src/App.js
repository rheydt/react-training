import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from "./api/userApi";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, []);

  // const handleDelete = id => setUsers(users.filter(user => user.id !== id));
  const handleDelete = id => deleteUser(id);

  return (
    <div className="App">

    <ul>
    {
      users.map(user => (
        <li key={user.id}>{user.name}
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </li>
      ))
    }
    </ul>
      <label htmlFor='firstname'>First Name:</label>
      <input id='firstname' />
    </div>
  );
}

export default App;
