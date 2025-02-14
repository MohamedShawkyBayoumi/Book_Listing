import React, { useState } from 'react';
import BookRow from '../components/BookRow';
import { connect } from 'react-redux';
import EditLink from '../components/EditLink';
import Pagination from '../components/Pagination';

const SingleAuthor = ({
    authors = [],
    books = [],
    match: { params: { authorId } },
    edit_mode
}) => {
    let index = authors.findIndex(author => author.id === authorId);

    let author = authors[index];

    let filteredBooks = books.length > 0 && author ? books.filter(book => book.author === author.id) : [];

    const [currentPage, setCurrentPage] = useState(1),
          [booksPerPage, setBooksPerPagev] = useState(6);

    const handleClick = event => {
        
        if(Number(event.target.id) !== 0 && Number(event.target.id) !== Math.ceil(filteredBooks.length / booksPerPage) + 1){
            setCurrentPage(Number(event.target.id));
        }
    }

    return (
        <div className="single-author">
            {author && (
                <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h1>{author.name}</h1>
                        {edit_mode && (
                            <EditLink to={`/author/${author.id}/edit`} />
                        )}
                    </div>
                    <h2>{author.jobTitle}</h2>
                    <p>{author.bio}</p>
                    {/* {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((book, i) => (
                        <BookRow {...book} key={i} />
                    ))} */}
                    <Pagination
                        books={filteredBooks}
                        currentPage={currentPage}
                        booksPerPage={booksPerPage}
                        handleClick={handleClick}
                    />
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    edit_mode: state.general.edit_mode
});

export default connect(mapStateToProps)(SingleAuthor);