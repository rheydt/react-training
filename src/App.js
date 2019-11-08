import React, { useState, useEffect } from 'react';
import { Root } from "@athena/forge";
import { Route } from "react-router-dom";
import { getUsers, deleteUser, addUser, editUser } from "./api/userApi";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import ManageUser from "./ManageUser/ManageUser";
import Users from "./Users/Users";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  // useEffect runs by default after every render
  useEffect(() => {
    // using _users to avoid naming confusion with users above
    getUsers().then(_users => {
      setUsers(_users);
    });
  }, []);

  function handleDelete(id) {
    deleteUser(id).then(() => {
      // Remove deleted element from users array
      const newUsers = users.filter(user => user.id !== id);
      setUsers(newUsers); // update state, so React knows to re-render
    });
  }

  async function handleAddUser(user) {
    // spread to make copy of user before overwriting
    // square brackets called computed property syntax, to reference a property using a variable
    const savedUser = await addUser(user);
    setUsers([...users, savedUser ]);
  }

  async function handleEditUser(userToEdit) {
    const savedUser = await editUser(userToEdit);
    // replace saved user in the array using map
    setUsers(users.map((user) => user.id === userToEdit.id ? savedUser : user));
  }

  return (
    <Root className="App fe_u_margin--large">
      <Nav />
      <main className="App__body">

        <Route path ="/" exact component={Home} />

        <Route
          path ="/users"
          render={ reactRouterProps => (
            // new feature: render props - pass render prop a function in order to pass props down
            <Users users={users} deleteUser={handleDelete}/>
          ) }
        />

        <Route
          path ="/user/:userId?" // adding the :id? makes this route match '/user' and '/user/5'
          render={ reactRouterProps => (
            <ManageUser
              onAddUser={handleAddUser}
              onEditUser={handleEditUser}
              users={users}
            />
          ) }
        />
      </main>

    </Root>
  );
}

export default App;
