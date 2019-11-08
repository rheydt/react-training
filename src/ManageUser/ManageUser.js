import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Heading, Form, FormField } from "@athena/forge";
import { Redirect, useRouteMatch } from "react-router-dom";

const ManageUser = ({users, onAddUser, onEditUser}) => {
  const match = useRouteMatch(); // info about the matching URL. brand new hook, few weeks old.
  const { userId } = match.params;

  /* argument passed to useState is default for that state */
  const [user, setUser] = useState({ name: "", email: "" }); // backup state for this form
  const [saveCompleted, setSaveCompleted] = useState(false);

  async function handleAddUser(event) {
    event.preventDefault(); // stop post back to prevent auto-reload on submit
    await onAddUser(user);
    setSaveCompleted(true);
  }

  async function handleEditedUser(event) {
    event.preventDefault(); // stop post back to prevent auto-reload on submit
    await onEditUser(user);
    setSaveCompleted(true);
  }

  const handleUserChange = (event) => {
    // spread to make copy of user before overwriting
    // square brackets called computed property syntax, to reference a property using a variable
    setUser({...user, [event.target.id]: event.target.value });
  }

  useEffect(() => {
    if (userId && users.length > 0) {
      const userToEdit = users.find((user) => user.id === parseInt(userId, 10));
      if (!userToEdit) return; // TODO: redirect to 404 page
      setUser(userToEdit);
    }
  }, [userId, users]);

  return (
    <>
      { /* && called the 'logical and operator' */ }
      { saveCompleted && <Redirect to="/users" /> }

      <Heading headingTag="h1" text="Add User"/>

      <Form
        buttonText="Save"
        onSubmit={userId ? handleEditedUser : handleAddUser}
      >
        <FormField
          labelText="First name:"
          id="name"
          value={user.name}
          onChange={handleUserChange}
        />
        <FormField
          labelText="Email:"
          type="email"
          id="email"
          value={user.email}
          onChange={handleUserChange}
        />
      </Form>

    </>
  );
}

ManageUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  onEditUser: PropTypes.func.isRequired,
  users: PropTypes.array
}

export default ManageUser;