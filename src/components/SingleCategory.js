import React from 'react'
import BookRow from './BookRow';

const SingleCategory = ({ categories = [], books = [], match: { params: { categoryId } } }) => {
    let index = categories.findIndex(author => author.id === categoryId);

    let category = categories[index];

    let filteredBooks = books.length > 0 && category ? books.filter(book => book.category === category.id) : [];

    return (
        <div className="single-category">
            {category && (
                <div>
                    <h1>{category.name}</h1>
                    {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((book, i) => (
                        <BookRow {...book} key={i} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SingleCategory;