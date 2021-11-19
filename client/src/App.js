import { useState } from "react";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList"
import BookDetails from "./components/BookDetails"

function App() {
  const [bookId, setBookId] = useState('');
  return (    
    <div id="main">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper z-depth-2">
            <span className="brand-logo" style={{paddingLeft: 10}}>My GraphQL App</span>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col s8">
            <div className="row">
              <BookList setBookId={setBookId} />
              <AddBook />
            </div>
          </div>
          <div className="col s4">
            {bookId && <BookDetails bookId={bookId}/>}
          </div>        
        </div>   
      </div>
           
    </div>
  );
}

export default App;
