import AddBook from "./components/AddBook";
import BookList from "./components/BookList"

function App() {
  return (
    <div id="main">
      <h1>My first Apollo app</h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
