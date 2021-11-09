import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

function BookList() {
  const [bookId, setBookId] = useState('');
  const {loading, data} = useQuery(getBooksQuery);
  return (
    <div className="row">
      <div className="col s8 offset-s1" style={{padding: 0}}>
        <div className="collection">
          {loading && 
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          }
          {data && data.books.map(book => {
            return (
              <a role="button" className="collection-item" key={book.id} onClick={(e) => setBookId(book.id)}>{book.name}</a>
            )
          })}
        </div>
      </div>
      <div className="col s3">
        {bookId && <BookDetails bookId={bookId}/>}
      </div>
      
    </div>
  );
}

export default BookList;
