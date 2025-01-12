import { UserButton, useUser } from "@clerk/clerk-react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AppNavbar() {
  const { isSignedIn } = useUser();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Book Management</Navbar.Brand>
        <Nav>
          {isSignedIn ? (
            <>
              <UserButton afterSignOutUrl="/login" />
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
