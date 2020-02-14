import React from 'react';
import { Link } from 'react-router-dom';
import BookIMG from './BookIMG';

const BookRow = ({ id, title, description, image }) => {
    return (
        <div className="book-row">
            <BookIMG
                title={title}
                image={image}
            />
            <div className="book-content">
                <h1><Link to={`/book/${id}`}>{title}</Link></h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BookRow;