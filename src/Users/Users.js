import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Heading, Button, Table } from "@athena/forge";
import './Users.css';

function Users({ users, deleteUser }) {

  const UserButtons = (user) => (
    <div className="Users__buttons">
      <Link to={"/user/" + user.id} className="Users__edit-link">
        <Button
          text="Edit"
          icon="Edit"
          variant="secondary"
          className="Users__edit-button"
        />
      </Link>
      <Button
        text="Delete"
        icon="Delete"
        variant="secondary"
        className="Users__delete"
        onClick={() => deleteUser(user.id)}
      />
    </div>
  );

  const tableData = users.map((user) => {
    const { id, name, email} = user;
    /* Delay execution on onClick while still passing argument by using arrow function */
    return {
      id: id,
      name: name,
      email: email,
      buttons: UserButtons(user),
    };
  });

  return (
    <>
      <div className="Users__header">
        <Heading headingTag="h1" text="Users"/>
        <Link to="/user">
          <Button text="Add User" icon="Patient"/>
        </Link>
      </div>

      <Table
        className="Users__table"
        columns={[
          { key: 'id', displayName: 'ID' },
          { key: 'name', displayName: 'Name' },
          { key: 'email', displayName: 'Email' },
          { key: 'buttons', displayName: '', props: { className: "Users__buttons-column" }},
        ]}
        rows={tableData}
      />
    </>
  );
}

/* lowercase b/c it's a property on our Users function */
Users.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
}

export default Users;
