import { useMutation, useQuery } from "@apollo/client";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/queries";
import { useState } from "react";

function AddBook() {
  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [addBook, {}] = useMutation(addBookMutation, {
    variables: {
      name: name,
      genre: genre,
      authorId: authorId,
    },
    refetchQueries: [{ query: getBooksQuery }]
  });
  const {loading, data} = useQuery(getAuthorsQuery);
  return (
    <form id="add-book" onSubmit={e => { e.preventDefault(); addBook()}}>

      <div className="field">
        <label>Book name</label>
        <input type="text" onChange={e => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre</label>
        <input type="text" onChange={e => setGenre(e.target.value)} />
      </div>

      <div className="input-field">
        <select defaultValue={'DEFAULT'} onChange={e => {console.log("asdasd");setAuthorId(e.target.value)}} >
          <option value="DEFAULT" disabled>Select author</option>
          {data && data.authors.map(author => {
            return(
              <option key={author.id} value={author.id}>{author.name}</option>              
            )
          })}          
        </select>
        <label>Author</label>
      </div>
      <button type="submit">+</button>
    </form>
  );
}

export default AddBook;