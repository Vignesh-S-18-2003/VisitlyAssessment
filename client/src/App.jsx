import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import Login from "./components/Login";
import Register from "./components/Register";
import AppNavbar from "./components/Navbar";
import { Container } from "react-bootstrap";
import Books from "./pages/Users";

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();
  return isSignedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ClerkProvider publishableKey={clerkKey}>
      <Router>
        <AppNavbar />
        <Container className="mt-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected Routes */}
            <Route path="/" element={
              <SignedIn>
                <ProtectedRoute>
                  {/* <BookForm />
                  <BookList /> */}
                  <Books/>
                </ProtectedRoute>
              </SignedIn>
            } />

            {/* Redirect unauthenticated users */}
            <Route path="*" element={<RedirectToSignIn />} />
          </Routes>
        </Container>
      </Router>
    </ClerkProvider>
  );
}

export default App;
