import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <Container className="mt-5">
      <h2 className="text-center">{isSignUp ? "Sign Up" : "Sign In"}</h2>
      <Form className="mt-4">
        {isSignUp && (
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>

        {isSignUp && (
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
        )}

        {/* Centered Sign In/Sign Up Button */}
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary" type="submit">
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Centered Toggle Button */}
      <p className="mt-3 text-center">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <Button variant="link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </p>
    </Container>
  );
};

export default Login;

