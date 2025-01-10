import { useEffect, useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import userService from "../services/userService";

function UserList({ onEdit }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  const deleteUser = (id) => {
    userService.deleteUser(id).then(() => {
      setUsers(users.filter(user => user.id !== id));
    });
  };

  return (
    <Container>
      <h2>User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning" size="sm" onClick={() => onEdit(user)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => deleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserList;
