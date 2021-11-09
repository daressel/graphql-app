import AddBook from "./components/AddBook";
import BookList from "./components/BookList"

function App() {
  return (
    <div id="main">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper z-depth-2">
            <span className="brand-logo" style={{paddingLeft: 10}}>My GraphQL App</span>
          </div>
        </nav>
      </div>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;
