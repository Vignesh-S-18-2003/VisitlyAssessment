import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useUser, SignedIn, SignedOut } from "@clerk/clerk-react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import Login from "./components/Login";
import Register from "./components/Register";
import AppNavbar from "./components/Navbar";
import { Container } from "react-bootstrap";

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <AppNavbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/" element={
            <ProtectedRoute>
              <UserForm />
              <UserList />
            </ProtectedRoute>
          } />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
