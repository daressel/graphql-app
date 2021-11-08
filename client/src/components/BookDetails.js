import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({bookId}) => {
  const {loading, data} = useQuery(getBookQuery, {
    variables: {
      id: bookId
    }
  });
  return (
    <div id="book-details">
      {loading && <div>Loading...</div>}
      {data && 
        <div id="book-info">
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <p>All books by this author</p>
          <ul>
            {data.book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      }
      {!data && <div>Book not selected</div>}
    </div>
  );
}
 
export default BookDetails;