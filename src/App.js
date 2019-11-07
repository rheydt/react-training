import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from "./api/userApi";
import { Root, Heading } from "@athena/forge";
// import Heading from "@athena/forge/Button";
// import SelectionList from "@athena/forge/Button";
// import SelectionListItem from "@athena/forge/Button";
// import Button from "@athena/forge/Button";
import logo from './logo.svg';
import '@athena/forge/static/css/forge.css';
import './App.css';

function App() {
  const [ users, setUsers ] = useState([]);

  const formStyle = {
    marginTop: 30
  }

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  useEffect(() => {
    getUsers().then(_users => setUsers(_users));
  }, [ ]);

  return (
    <Root className="App">

      <Heading headingTag="h1" text="Users"/>

      <table>
        <thead>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>
                { /* Delay execution via arrow function */ }
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      <form style={formStyle}>
        <label htmlFor='firstname'>First Name:</label>
        <input id='firstname' />

        <label htmlFor='email'>Email:</label>
        <input id='email' />
      </form>

    </Root>
  );
}

export default App;
