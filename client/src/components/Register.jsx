import { SignUp } from "@clerk/clerk-react";
import { Container } from "react-bootstrap";

function Register() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <SignUp />
    </Container>
  );
}

export default Register;
