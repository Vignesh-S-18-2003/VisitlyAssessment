import { SignIn } from "@clerk/clerk-react";
import { Container } from "react-bootstrap";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <SignIn />
    </Container>
  );
}

export default Login;
