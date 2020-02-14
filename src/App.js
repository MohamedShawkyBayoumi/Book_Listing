import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AsideBlock from './components/AsideBlock';
import data from './Data/books.json';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './pages/Home';
import SingleBook from './pages/SingleBook';
import SingleAuthor from './pages/SingleAuthor';
import SingleCategory from './components/SingleCategory';
import NewAuthor from './pages/NewAuthor';
import NewCategory from './pages/NewCategory';
import NewBook from './pages/NewBook';

function App() {

  const [books, setBooks] = useState([]),
        [authors, setAuthors] = useState([]),
        [categories, setCategories] = useState([]);
  
  useEffect(() => {

    // Fake async request
    setTimeout(() => {
      setBooks(data.books);
      setAuthors(data.authors);
      setCategories(data.categories);
    }, 1000);

  }, []);

  return (
    <div className="App">
      <Header />
      <div className="page-content">
        <aside>
          {categories && categories.length > 0 && (
            <AsideBlock
              title="Categories"
              list={categories}
              block={1}
            />
          )}
          {authors && authors.length > 0 && (
            <AsideBlock
              title="Authors"
              list={authors}
              block={2}
            />
          )}
        </aside>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home books={books} />}
            />
            <Route
              path="/author/new"
              render={() => <NewAuthor />}
            />
            <Route
              path="/category/new"
              render={props => <NewCategory {...props} />}
            />
            <Route
              path="/book/new"
              render={() => <NewBook />}
            />
            <Route
              path="/book/:bookId"
              render={props => <SingleBook books={books} {...props} />}
            />
            <Route
              path="/author/:authorId"
              render={props => <SingleAuthor authors={authors} books={books} {...props} />}
            />
            <Route
              path="/category/:categoryId"
              render={props => <SingleCategory categories={categories} authors={authors} books={books} {...props} />}
            />
            
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;