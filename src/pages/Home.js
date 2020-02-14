import React from 'react'
import BookRow from '../components/BookRow'

const Home = ({ books = [] }) => {
    return (
        <div>
            {books && books.length > 0 && books.map((book, i) => (
                <BookRow {...book} key={i} />
            ))}
        </div>
    )
}

export default Home;