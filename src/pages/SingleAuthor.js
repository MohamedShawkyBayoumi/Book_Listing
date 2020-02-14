import React from 'react';
import BookRow from '../components/BookRow';

const SingleAuthor = ({ authors = [], books = [], match: { params: { authorId } } }) => {
    let index = authors.findIndex(author => author.id === authorId);

    let author = authors[index];

    let filteredBooks = books.length > 0 && author ? books.filter(book => book.author == author.id) : [];

    return (
        <div className="single-author">
            {author && (
                <div>
                    <h1>{author.name}</h1>
                    <h2>{author.jobTitle}</h2>
                    <p>{author.bio}</p>
                    {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((book, i) => (
                        <BookRow {...book} key={i} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SingleAuthor;