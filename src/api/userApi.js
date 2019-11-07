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

