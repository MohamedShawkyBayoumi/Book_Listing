import React from 'react';
import BookIMG from '../components/BookIMG';
import { connect } from 'react-redux';
import EditLink from '../components/EditLink';

const SingleBook = ({
    books = [],
    match: { params: { bookId } },
    categories = [],
    authors = [],
    edit_mode
}) => {
    let index = books.findIndex(book => book.id === bookId);

    let book = books[index];

    let category = null;
    let author = null;
    if(book){
        category = categories.find(category => category.id === book.category);
        author = authors.find(author => author.id === book.author);
    }

    return (
        <div className="single-book">
            {book && category && author && (
                <div>
                    <div className="book-info">
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <h1>{book.title}</h1>
                                {edit_mode && (
                                    <EditLink to={`/book/${book.id}/edit`} />
                                )}
                            </div>
                            <h4>By: <span>{author.name}</span></h4>
                            <h4>Number of Pages: <span>{book.pagesNumber}</span></h4>
                            <h4>Publish year: <span>{book.publishYear}</span></h4>
                            <h4>ISBN: <span>{book.isbn}</span></h4>
                            <h4>Classification: <span>{category.name}</span></h4>
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

const mapStateToProps = state => ({
    edit_mode: state.general.edit_mode
});

export default connect(mapStateToProps)(SingleBook);