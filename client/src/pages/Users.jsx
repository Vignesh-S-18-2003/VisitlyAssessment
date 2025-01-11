import { useState, useEffect } from "react";
import BookList from "../components/UserList";
import BookForm from "../components/UserForm";
import userService from "../services/userService";

function Books() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    userService.getBooks().then(setBooks);
  }, []);

  const handleBookSaved = () => {
    userService.getBooks().then(setBooks); // Fetch latest books after save/update
    setSelectedBook(null);
  };

  return (
    <>
      <BookForm selectedBook={selectedBook} onBookSaved={handleBookSaved} />
      <BookList books={books} setBooks={setBooks} onEdit={setSelectedBook} />
    </>
  );
}

export default Books;
