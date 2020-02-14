import React from 'react';
import BookIMG from '../components/BookIMG';

const SingleBook = ({ books = [], match: { params: { bookId } } }) => {
    let index = books.findIndex(book => book.id === bookId);

    let book = books[index];

    return (
        <div className="single-book">
            {book && (
                <div>
                    <div className="book-info">
                        <div>
                            <h1>{book.title}</h1>
                            <h4>By: <span>{book.author}</span></h4>
                            <h4>Number of Pages: <span>{book.pagesNumber}</span></h4>
                            <h4>Publish year: <span>{book.publishYear}</span></h4>
                            <h4>ISBN: <span>{book.isbn}</span></h4>
                            <h4>Classification: <span>Category name</span></h4>
                        </div>
                        <BookIMG
                            title={book.title}
                            image={book.image}
                        />
                    </div>
                    <p>{book.description}</p>
                </div>
            )}
        </div>
    );
}

export default SingleBook;