import React from 'react'

const BookIMG = ({ title, image }) => {
    return (
        <div className="book-img">
            <img alt={title} src={image} />
        </div>
    )
}

export default BookIMG;