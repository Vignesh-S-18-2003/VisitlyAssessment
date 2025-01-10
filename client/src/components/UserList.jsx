import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import userService from "../services/userService"; // Assuming you renamed your services accordingly

function BookList({ onEdit }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    userService.getBooks().then(setBooks); // Adjust the service call to getBooks
  }, []);

  const deleteBook = (id) => {
    userService.deleteBook(id).then(() => {
      setBooks(books.filter(book => book.id !== id));
    });
  };

  return (
    <Container>
      <h2>Book List</h2>
      <Row>
        {books.map(book => (
          <Col key={book.id} md={3} sm={6} xs={12}>
            <Card>
              <Card.Body>
                <Card.Title>{book.bookName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{book.authorName}</Card.Subtitle>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text><strong>Publish Date:</strong> {book.publish}</Card.Text>
                <Button variant="warning" size="sm" onClick={() => onEdit(book)}>Edit</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => deleteBook(book.id)}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
