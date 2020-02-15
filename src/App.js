import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AsideBlock from './components/AsideBlock';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SingleBook from './pages/SingleBook';
import SingleAuthor from './pages/SingleAuthor';
import SingleCategory from './pages/SingleCategory';
import NewAuthor from './pages/NewAuthor';
import NewCategory from './pages/NewCategory';
import NewBook from './pages/NewBook';
import { connect } from 'react-redux';

function App({ books, categories, authors }) {

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
              render={
                () => 
                <Home
                  books={books}
                />
              }
            />
            <Route
              path="/author/new"
              render={props => <NewAuthor {...props} />}
            />
            <Route
              path="/author/:authorId/edit"
              render={props => <NewAuthor {...props} />}
            />
            <Route
              path="/category/new"
              render={props => <NewCategory {...props} />}
            />
            <Route
              path="/category/:categoryId/edit"
              render={props => <NewCategory {...props} />}
            />
            <Route
              path="/book/new"
              render={props => <NewBook {...props} />}
            />
            <Route
              path="/book/:bookId/edit"
              render={props => <NewBook {...props} />}
            />
            <Route
              path="/book/:bookId"
              render={props => <SingleBook authors={authors} categories={categories} books={books} {...props} />}
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

const mapStateToProps = state => ({
  books: state.books.items,
  authors: state.authors.items,
  categories: state.categories.items
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);