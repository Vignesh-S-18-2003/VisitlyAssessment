import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import userService from "../services/userService"; // Assuming you renamed your services accordingly

function BookForm({ selectedBook, onBookSaved }) {
  const [book, setBook] = useState({ bookName: "", authorName: "", description: "", publish: "" });

  useEffect(() => {
    setBook(selectedBook || { bookName: "", authorName: "", description: "", publish: "" });
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiCall = book.id ? userService.updateBook(book) : userService.createBook(book);

    apiCall.then(() => {
      setBook({ bookName: "", authorName: "", description: "", publish: "" });
      onBookSaved();
    });
  };

  return (
    <Container>
      <h2>{book.id ? "Edit Book" : "Add Book"}</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                value={book.bookName}
                onChange={(e) => setBook({ ...book, bookName: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                value={book.authorName}
                onChange={(e) => setBook({ ...book, authorName: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={book.description}
                onChange={(e) => setBook({ ...book, description: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form.Group>
              <Form.Label>Publish Date</Form.Label>
              <Form.Control
                type="date"
                value={book.publish}
                onChange={(e) => setBook({ ...book, publish: e.target.value })}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">{book.id ? "Update" : "Add"}</Button>
      </Form>
    </Container>
  );
}

export default BookForm;
