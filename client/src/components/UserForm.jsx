import { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import userService from "../services/userService";

function UserForm({ selectedUser, onUserSaved }) {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    setUser(selectedUser || { name: "", email: "" });
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = user.id ? userService.updateUser(user) : userService.createUser(user);

    apiCall.then(() => {
      setUser({ name: "", email: "" });
      onUserSaved();
    });
  };

  return (
    <Container>
      <h2>{user.id ? "Edit User" : "Add User"}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">{user.id ? "Update" : "Add"}</Button>
      </Form>
    </Container>
  );
}

export default UserForm;
