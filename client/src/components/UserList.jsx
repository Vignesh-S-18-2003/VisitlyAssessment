import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import userService from "../services/userService"; // Assuming you renamed your services accordingly

function BookList({ books, setBooks, onEdit }) {
  const deleteBook = (id) => {
    userService.deleteBook(id).then(() => {
      setBooks(books.filter(book => book.id !== id)); // Update list after delete
    });
  };

  return (
    <Container>
      <h2>Book List</h2>
      <Row>
        {books.map(book => (
          <Col key={book.id} md={3} sm={6} xs={12}>
            <Card style={{ minHeight: "250px", marginBottom: "25px", border: "2px solid rgb(78, 4, 50)" }}>
              <Card.Body>
                <Card.Title>{book.bookName}</Card.Title>
                <Card.Subtitle className="mb-2" style={{ color: "rgb(78, 4, 50)" }}>
                  {book.authorName}
                </Card.Subtitle>
                <Card.Text>{book.description}</Card.Text>
                <Card.Text>
                  <strong>Publish Date:</strong> {book.publish.slice(0, 10)}
                </Card.Text>
                <Button style={{ backgroundColor: "#640e40", borderColor: "#640e40" }} size="sm" onClick={() => onEdit(book)}>
                  Edit
                </Button>{" "}
                <Button
                  style={{ backgroundColor: "rgb(61, 20, 45)", borderColor: "#640e40" }}
                  size="sm"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
