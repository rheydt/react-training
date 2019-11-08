import { userInfo } from "os";

// API proxy, aka make http calls for my app
// fetch works in browsers now. global that just works without importing/installing

export function getUsers() {
  // fetch uses a promise-bases system
  return fetch("http://localhost:3001/users").then(response => {
    if (response.ok) {
      return response.json();
    };
    throw new Error("Bad network response");
  })
}

export function deleteUser(id) {
  return fetch(`http://localhost:3001/users/${id}`, {
    method: "DELETE"
  }).then(response => {
    if (response.ok) {
      return response.json();
    };
    throw new Error("Bad network response");
  })
}

export function addUser(user) {
  console.log("adding user", user);
  return fetch(`http://localhost:3001/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    };
    throw new Error("Bad network response");
  })
}

export function editUser(user) {
  console.log(user);
  return fetch(`http://localhost:3001/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  }).then(response => {
    if (response.ok) {
      return response.json();
    };
    throw new Error("Bad network response");
  })
}
