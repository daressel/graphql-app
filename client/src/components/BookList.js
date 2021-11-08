import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {
  const [bookId, setBookId] = useState('');
  const {loading, data} = useQuery(getBooksQuery);
  return (
    <div>
      <ul id="book-list">
        {loading && <div>Loading...</div>}
        {data && data.books.map(book => {
          return (
            <li key={book.id} onClick={(e) => setBookId(book.id)}>{book.name}</li>
          )
        })}
      </ul>
      {bookId && <BookDetails bookId={bookId}/>}
    </div>
  );
}

export default BookList;
