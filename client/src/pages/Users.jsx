import { useState } from "react";
import BookForm from "../components/UserForm";

import BookList from "../components/UserList";

function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <>
      <BookForm selectedBook={selectedBook} onBookSaved={() => setSelectedBook(null)} />
      <BookList onEdit={setSelectedBook} />
      
    </>
  );
}

export default Books;
