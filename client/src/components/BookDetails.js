import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

const BookDetails = ({bookId}) => {
  const {loading, data} = useQuery(getBookQuery, {
    variables: {
      id: bookId
    }
  });
  return (
    <div className="card blue-grey darken-1">
      {loading && 
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    }
      {data && 
        <div className="white-text" style={{padding: 30}}>
          <h2>{data.book.name}</h2>
          <p>Жанр: {data.book.genre}</p>
          <p>Автор: {data.book.author.name}</p>
          <p>Все книги от этого автора</p>
          <ul>
            {data.book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      }
    </div>
  );
}
 
export default BookDetails;