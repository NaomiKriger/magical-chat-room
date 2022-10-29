const users = [];

export function userJoin(id, username) {
  const user = { id, username };

  users.push(user);

  return user;
}

export function deleteUser(id) {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

export function getRoomUsers() {
  return users;
}

export function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}
