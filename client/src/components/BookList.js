import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
// import BookDetails from "./BookDetails";

function BookList({setBookId}) {
  const {loading, data} = useQuery(getBooksQuery);
  return (     
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
  );
}

export default BookList;
